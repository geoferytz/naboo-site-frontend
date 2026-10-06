import { AfterViewInit, Component, ElementRef, inject, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ApiService, Product, ServiceItem } from '../../core/api.service';
import { ProductCardComponent } from '../product-card/product-card.component';
@Component({ standalone: true, imports: [CommonModule, RouterLink, ProductCardComponent], styleUrl: './home.component.scss', templateUrl: './home.component.html' })
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  private api=inject(ApiService); private host=inject(ElementRef<HTMLElement>); private observer?:IntersectionObserver; products:Product[]=[]; services:ServiceItem[]=[]; settings:Record<string,string>={}; loading=true; error='';
  benefits=[{icon:'⚙',title:'Less busywork',text:'Streamline the everyday tasks that slow your team down.'},{icon:'◎',title:'More control',text:'Keep the moving parts of your business in one place.'},{icon:'▥',title:'Clearer decisions',text:'Turn useful information into confident next steps.'},{icon:'↗',title:'Room to grow',text:'Choose tools that can keep pace with your ambitions.'}];
  ngOnInit(){this.load()}
  ngAfterViewInit(){const elements=Array.from(this.host.nativeElement.querySelectorAll('.reveal')) as HTMLElement[];if(!('IntersectionObserver' in window)){elements.forEach(el=>el.classList.add('in-view'));return}this.observer=new IntersectionObserver(entries=>{for(const entry of entries)if(entry.isIntersecting){entry.target.classList.add('in-view');this.observer?.unobserve(entry.target)}},{threshold:.12,rootMargin:'0px 0px -60px'});elements.forEach(el=>this.observer?.observe(el))}
  ngOnDestroy(){this.observer?.disconnect()}
  async load(){this.loading=true;this.error='';try{const [p,s,settings]=await Promise.all([this.api.products(),this.api.services(),this.api.settings()]);this.products=p.products.filter(x=>x.featured);this.services=s.services;this.settings=Object.fromEntries(settings.companySettings.map(item=>[item.key,item.value]))}catch{this.error='We could not load the catalogue right now.'}finally{this.loading=false}}
}
