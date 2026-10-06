import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ApiService, ServiceItem } from '../../core/api.service';
@Component({ standalone:true, imports:[CommonModule,RouterLink], styleUrl: './services.component.scss', templateUrl: './services.component.html' })
export class ServicesComponent implements OnInit {private api=inject(ApiService);services:ServiceItem[]=[];loading=true;error='';ngOnInit(){this.load()}async load(){this.loading=true;this.error='';try{this.services=(await this.api.services()).services}catch{this.error='Unable to load services.'}finally{this.loading=false}}servicePrice(service:ServiceItem){if(service.priceType==='QUOTE')return 'Request a quote';if(service.priceType==='PACKAGE')return 'Based on package';return `${service.priceType==='FROM'?'From ':''}${service.currency} ${Number(service.startingPrice||0).toLocaleString()}`}}
