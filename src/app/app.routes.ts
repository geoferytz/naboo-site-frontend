import { Routes } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './core/api.service';

export const routes: Routes = [
  { path: '', title: 'NABOO Technologies | Smart Software Solutions', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
  { path: 'products', title: 'Software Products | NABOO', loadComponent: () => import('./pages/catalogue/catalogue.component').then(m => m.CatalogueComponent) },
  { path: 'products/:slug', title: 'Product Details | NABOO', loadComponent: () => import('./pages/product/product.component').then(m => m.ProductComponent) },
  { path: 'pricing', title: 'Software Pricing | NABOO', loadComponent: () => import('./pages/pricing/pricing.component').then(m => m.PricingComponent) },
  { path: 'cart', title: 'Your Cart | NABOO', loadComponent: () => import('./pages/cart/cart.component').then(m => m.CartComponent) },
  { path: 'checkout', title: 'Checkout & Payment | NABOO', loadComponent: () => import('./pages/checkout/checkout.component').then(m => m.CheckoutComponent) },
  { path: 'services', title: 'IT Services | NABOO', loadComponent: () => import('./pages/services/services.component').then(m => m.ServicesComponent) },
  { path: 'contact', title: 'Contact Us | NABOO', loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent) },
  { path: 'request-demo', title: 'Request a Demo | NABOO', loadComponent: () => import('./pages/demo/demo.component').then(m => m.DemoComponent) },
  { path: 'about', title: 'About Us | NABOO', loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent) },
  { path: 'privacy-policy', title: 'Privacy Policy | NABOO', loadComponent: () => import('./pages/legal/legal.component').then(m => m.LegalComponent), data: { type: 'privacy' } },
  { path: 'terms', title: 'Terms | NABOO', loadComponent: () => import('./pages/legal/legal.component').then(m => m.LegalComponent), data: { type: 'terms' } },
  { path: 'admin/login', title: 'Admin Login | NABOO', loadComponent: () => import('./admin/login.component').then(m => m.LoginComponent) },
  { path: 'admin/:section', title: 'Administration | NABOO', canActivate: [() => inject(ApiService).token ? true : inject(Router).createUrlTree(['/admin/login'])], loadComponent: () => import('./admin/admin.component').then(m => m.AdminComponent) },
  { path: '**', redirectTo: '' }
];
