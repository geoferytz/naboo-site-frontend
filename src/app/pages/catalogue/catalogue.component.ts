import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService, Product } from '../../core/api.service';
import { ProductCardComponent } from '../product-card/product-card.component';
@Component({ standalone:true, imports:[CommonModule,FormsModule,ProductCardComponent], styleUrl: './catalogue.component.scss', templateUrl: './catalogue.component.html' })
export class CatalogueComponent implements OnInit { private api=inject(ApiService); products:Product[]=[]; loading=true; error=''; selected='All products'; search=''; get categories(){return ['All products',...new Set(this.products.map(p=>p.category))]} get filtered(){return this.products.filter(p=>(this.selected==='All products'||p.category===this.selected)&&(`${p.name} ${p.shortDescription} ${p.features.join(' ')}`.toLowerCase().includes(this.search.toLowerCase())))} ngOnInit(){this.load()} async load(){this.loading=true;this.error='';try{this.products=(await this.api.products()).products}catch{this.error='Unable to load products.'}finally{this.loading=false}} }
