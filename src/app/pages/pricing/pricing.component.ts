import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ApiService, Plan, Product, ServiceItem } from '../../core/api.service';
import { CartService } from '../../core/cart.service';
@Component({ standalone:true, imports:[CommonModule,RouterLink], styleUrl: './pricing.component.scss', templateUrl: './pricing.component.html' })
export class PricingComponent implements OnInit {
  private api=inject(ApiService); cart=inject(CartService);
  products:Product[]=[]; services:ServiceItem[]=[]; selected:Product|null=null; loading=true; error=''; added='';
  ngOnInit(){this.load()}
  async load(){this.loading=true;this.error='';try{const [products,services]=await Promise.all([this.api.products(),this.api.services()]);this.products=products.products;this.services=services.services;this.selected=this.products[0]||null}catch{this.error='Unable to load pricing.'}finally{this.loading=false}}
  servicePrice(service:ServiceItem){if(service.priceType==='QUOTE')return 'Request a quote';if(service.priceType==='PACKAGE')return 'Based on package';return `${service.priceType==='FROM'?'From ':''}${service.currency} ${Number(service.startingPrice||0).toLocaleString()}`}
  addToCart(product:Product,plan:Plan){if(this.cart.add(product,plan)){this.added=plan.id;setTimeout(()=>{if(this.added===plan.id)this.added=''},2000)}}
}
