import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { ApiService } from './core/api.service';
import { CartService } from './core/cart.service';

@Component({ selector: 'app-root', standalone: true, imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet], templateUrl: './app.component.html', styleUrl: './app.component.scss' })
export class AppComponent implements OnInit {
  private api = inject(ApiService);
  cart = inject(CartService);
  private router = inject(Router);
  private document = inject(DOCUMENT);
  private meta = inject(Meta);
  private title = inject(Title);
  menuOpen = false;
  year = new Date().getFullYear();
  settings: Record<string, string> = {};
  async ngOnInit() {
    this.router.events.subscribe(event => { if (event instanceof NavigationEnd) this.updateMetadata(event.urlAfterRedirects); });
    this.updateMetadata(this.router.url);
    try { const data = await this.api.settings(); this.settings = Object.fromEntries(data.companySettings.map(s => [s.key, s.value])); if(this.settings['seoDescription']){this.meta.updateTag({name:'description',content:this.settings['seoDescription']});this.meta.updateTag({property:'og:description',content:this.settings['seoDescription']})}} catch {}
  }
  whatsappLink() { return `https://wa.me/${(this.settings['whatsapp'] || '').replace(/\D/g, '')}`; }
  private updateMetadata(path: string) {
    const url = new URL(path, this.document.location?.origin || 'http://localhost');
    let canonical = this.document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) { canonical = this.document.createElement('link'); canonical.rel = 'canonical'; this.document.head.appendChild(canonical); }
    canonical.href = url.origin + url.pathname;
    this.meta.updateTag({ property: 'og:url', content: canonical.href });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:title', content: this.title.getTitle() });
    this.meta.updateTag({ name: 'robots', content: url.pathname.startsWith('/admin') ? 'noindex, nofollow' : 'index, follow' });
  }
}
