import { Injectable, signal, computed } from '@angular/core';
import { Plan, Product } from './api.service';

export interface CartLine { packageId: string; productId: string; productName: string; packageName: string; price: number; currency: string; billingFrequency: string; quantity: number }

const STORAGE_KEY = 'naboo.cart';

@Injectable({ providedIn: 'root' })
export class CartService {
  readonly lines = signal<CartLine[]>(this.restore());
  readonly count = computed(() => this.lines().reduce((sum, line) => sum + line.quantity, 0));
  readonly total = computed(() => this.lines().reduce((sum, line) => sum + line.price * line.quantity, 0));
  readonly currency = computed(() => this.lines()[0]?.currency ?? 'TSh');

  add(product: Product, plan: Plan) {
    if (plan.customPrice || plan.price === null) return false;
    const existing = this.lines().find(line => line.packageId === plan.id);
    if (existing) this.setQuantity(plan.id, existing.quantity + 1);
    else this.update([...this.lines(), { packageId: plan.id, productId: product.id, productName: product.name, packageName: plan.name, price: Number(plan.price), currency: plan.currency, billingFrequency: plan.billingFrequency, quantity: 1 }]);
    return true;
  }
  setQuantity(packageId: string, quantity: number) {
    const safe = Math.max(1, Math.min(100, Math.floor(quantity) || 1));
    this.update(this.lines().map(line => line.packageId === packageId ? { ...line, quantity: safe } : line));
  }
  remove(packageId: string) { this.update(this.lines().filter(line => line.packageId !== packageId)); }
  clear() { this.update([]); }

  private update(lines: CartLine[]) {
    this.lines.set(lines);
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(lines)); } catch {}
  }
  private restore(): CartLine[] {
    try { const raw = localStorage.getItem(STORAGE_KEY); const parsed = raw ? JSON.parse(raw) : []; return Array.isArray(parsed) ? parsed : []; } catch { return []; }
  }
}
