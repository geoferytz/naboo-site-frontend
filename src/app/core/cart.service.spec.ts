/// <reference types="jasmine" />
import { TestBed } from '@angular/core/testing';
import { CartService } from './cart.service';
import { Plan, Product } from './api.service';

describe('CartService', () => {
  const product = { id: 'p1', name: 'NABOO Sales' } as Product;
  const plan = { id: 'pk1', name: 'Starter', price: '30000', currency: 'TSh', billingFrequency: 'MONTHLY', customPrice: false } as Plan;
  let cart: CartService;
  beforeEach(() => { localStorage.removeItem('naboo.cart'); cart = TestBed.inject(CartService); cart.clear(); });

  it('adds packages, merges duplicates and totals the amount', () => {
    expect(cart.add(product, plan)).toBeTrue();
    expect(cart.add(product, plan)).toBeTrue();
    expect(cart.lines().length).toBe(1);
    expect(cart.count()).toBe(2);
    expect(cart.total()).toBe(60000);
    expect(JSON.parse(localStorage.getItem('naboo.cart') || '[]').length).toBe(1);
  });

  it('refuses custom-price packages and clamps quantities', () => {
    expect(cart.add(product, { ...plan, id: 'pk2', customPrice: true, price: null })).toBeFalse();
    cart.add(product, plan);
    cart.setQuantity('pk1', 500);
    expect(cart.lines()[0].quantity).toBe(100);
    cart.remove('pk1');
    expect(cart.lines().length).toBe(0);
  });
});
