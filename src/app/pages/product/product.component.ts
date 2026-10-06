import { Component, inject, OnInit } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ApiService, Product, PRODUCT_FIELDS } from '../../core/api.service';
import { Title, Meta } from '@angular/platform-browser';
@Component({ standalone:true, imports:[CommonModule,RouterLink,DecimalPipe], styleUrl: './product.component.scss', templateUrl: './product.component.html' })
export class ProductComponent implements OnInit { private api=inject(ApiService); private route=inject(ActivatedRoute); private title=inject(Title); private meta=inject(Meta); product:Product|null=null; loading=true; error=''; ngOnInit(){this.route.paramMap.subscribe(()=>this.load())} async load(){this.loading=true;this.error='';this.product=null;try{this.product=(await this.api.query<{productBySlug:Product|null}>(`query ($slug:String!){ productBySlug(slug:$slug){ ${PRODUCT_FIELDS} } }`,{slug:this.route.snapshot.paramMap.get('slug')})).productBySlug;if(!this.product){this.error='This product is not available.'}else{this.title.setTitle(`${this.product.name} | NABOO`);this.meta.updateTag({name:'description',content:this.product.shortDescription})}}catch{this.error='Unable to load this product.'}finally{this.loading=false}} }
