import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

export interface Plan { id: string; productId: string; name: string; description: string; price: string | null; currency: string; billingFrequency: string; customPrice: boolean; active: boolean; featured: boolean; displayOrder: number; userLimit?: string; roomLimit?: string; productLimit?: string; supportLevel?: string; features: string[] }
export interface Product { id: string; name: string; slug: string; category: string; shortDescription: string; description: string; imageUrl?: string; status: string; featured: boolean; displayOrder: number; features: string[]; packages: Plan[] }
export interface ServiceItem { id: string; name: string; slug: string; shortDescription: string; description: string; imageUrl?: string; category: string; priceType: string; startingPrice?: string; currency: string; status: string; displayOrder: number }
export interface Lead { id: string; referenceNumber: string; fullName: string; email: string; phone: string; status: string; notes: string; assignedUserId?: string; createdAt: string; company?: string; companyName?: string; subject?: string; message?: string; productId?: string; preferredDate?: string; preferredTime?: string }
export const PRODUCT_FIELDS = 'id name slug category shortDescription description imageUrl status featured displayOrder features packages { id productId name description price currency billingFrequency customPrice active featured displayOrder features }';
export const PLAN_FIELDS = 'id productId name description price currency billingFrequency customPrice active featured displayOrder userLimit roomLimit productLimit supportLevel features';
export const SERVICE_FIELDS = 'id name slug shortDescription description imageUrl category priceType startingPrice currency status displayOrder';
export const LEAD_FIELDS = 'id referenceNumber fullName email phone status assignedUserId notes createdAt';
export interface OrderItem { id: string; packageId: string; productName: string; packageName: string; billingFrequency: string; unitPrice: string; quantity: number }
export interface Order { id: string; referenceNumber: string; fullName: string; email: string; phone: string; company?: string; paymentMethod: string; paymentReference?: string; payerPhone?: string; currency: string; totalAmount: string; status: string; notes?: string; createdAt: string; paidAt?: string; items: OrderItem[] }
export const ORDER_FIELDS = 'id referenceNumber fullName email phone company paymentMethod paymentReference payerPhone currency totalAmount status notes createdAt paidAt items { id packageId productName packageName billingFrequency unitPrice quantity }';
export const PAYMENT_METHODS = [
  { key: 'M_PESA', label: 'Vodacom M-Pesa', settingKey: 'payment.vodacomNumber', network: 'Vodacom' },
  { key: 'TIGO_PESA', label: 'Tigo Pesa (Mixx by Yas)', settingKey: 'payment.tigoNumber', network: 'Tigo' },
  { key: 'AIRTEL_MONEY', label: 'Airtel Money', settingKey: 'payment.airtelNumber', network: 'Airtel' },
  { key: 'HALOPESA', label: 'HaloPesa', settingKey: 'payment.halotelNumber', network: 'Halotel' },
  { key: 'BANK', label: 'Bank transfer', settingKey: 'payment.bankAccountNumber', network: 'Bank' }
] as const;

@Injectable({ providedIn: 'root' })
export class ApiService {
  private http = inject(HttpClient);
  token = '';
  role = '';
  async query<T>(query: string, variables: Record<string, unknown> = {}): Promise<T> {
    const result = await firstValueFrom(this.http.post<{ data?: T; errors?: { message: string }[] }>('/graphql', { query, variables }, {
      headers: this.token ? { Authorization: `Bearer ${this.token}` } : {}
    }));
    if (result.errors?.length || !result.data) throw new Error(result.errors?.[0]?.message || 'Unable to load data. Please try again.');
    return result.data;
  }
  async login(email: string, password: string) {
    const result = await firstValueFrom(this.http.post<{ accessToken: string; role: string }>('/auth/login', { email, password }));
    this.token = result.accessToken;
    this.role = result.role;
  }
  logout() { this.token = ''; this.role = ''; }
  async uploadImage(file: File): Promise<string> {
    const form = new FormData(); form.append('image', file);
    const result = await firstValueFrom(this.http.post<{ url: string }>('/admin/uploads', form, { headers: { Authorization: `Bearer ${this.token}` } }));
    return result.url;
  }
  products() { return this.query<{ products: Product[] }>(`query { products { ${PRODUCT_FIELDS} } }`); }
  services() { return this.query<{ services: ServiceItem[] }>(`query { services { ${SERVICE_FIELDS} } }`); }
  settings() { return this.query<{ companySettings: { key: string; value: string }[] }>('query { companySettings { key value } }'); }
}
