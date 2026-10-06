import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ApiService, Product, ServiceItem } from '../../core/api.service';
@Component({ standalone:true, imports:[CommonModule,RouterLink], styleUrl: './pricing.component.scss', templateUrl: './pricing.component.html' })
export class PricingComponent implements OnInit {private api=inject(ApiService);products:Product[]=[];services:ServiceItem[]=[];selected:Product|null=null;loading=true;error='';ngOnInit(){this.load()}async load(){this.loading=true;this.error='';try{const [products,services]=await Promise.all([this.api.products(),this.api.services()]);this.products=products.products;this.services=services.services;this.selected=this.products[0]||null}catch{this.error='Unable to load pricing.'}finally{this.loading=false}}servicePrice(service:ServiceItem){if(service.priceType==='QUOTE')return 'Request a quote';if(service.priceType==='PACKAGE')return 'Based on package';return `${service.priceType==='FROM'?'From ':''}${service.currency} ${Number(service.startingPrice||0).toLocaleString()}`}}
