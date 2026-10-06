import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ApiService, Order, ORDER_FIELDS, PAYMENT_METHODS } from '../../core/api.service';
import { CartService } from '../../core/cart.service';

@Component({ standalone: true, imports: [CommonModule, FormsModule, RouterLink], styleUrl: './checkout.component.scss', templateUrl: './checkout.component.html' })
export class CheckoutComponent implements OnInit {
  private api = inject(ApiService); private route = inject(ActivatedRoute); cart = inject(CartService);
  methods = PAYMENT_METHODS;
  settings: Record<string, string> = {};
  model = { fullName: '', email: '', phone: '', company: '', paymentMethod: 'M_PESA', consent: false, website: '' };
  confirmation = { paymentReference: '', payerPhone: '' };
  lookup = { referenceNumber: '', email: '' };
  order: Order | null = null;
  loading = true; submitting = false; error = ''; notice = ''; showLookup = false;

  async ngOnInit() {
    try { this.settings = Object.fromEntries((await this.api.settings()).companySettings.map(s => [s.key, s.value])); } catch {}
    const ref = this.route.snapshot.queryParamMap.get('ref'); const email = this.route.snapshot.queryParamMap.get('email');
    if (ref && email) { this.lookup = { referenceNumber: ref, email }; await this.findOrder(); }
    this.loading = false;
  }
  get method() { return this.methods.find(m => m.key === (this.order?.paymentMethod || this.model.paymentMethod)) ?? this.methods[0]; }
  get payTo() { return this.settings[this.method.settingKey] || ''; }
  get bankDetails() { return [['Bank', this.settings['payment.bankName']], ['Account name', this.settings['payment.bankAccountName']], ['Account number', this.settings['payment.bankAccountNumber']], ['Branch', this.settings['payment.bankBranch']]].filter(([, value]) => value); }
  label(key: string) { return this.methods.find(m => m.key === key)?.label ?? key; }
  statusText(status: string) { return ({ AWAITING_PAYMENT: 'Awaiting payment', PAYMENT_SUBMITTED: 'Payment submitted – awaiting verification', PAID: 'Paid and confirmed', CANCELLED: 'Cancelled', REFUNDED: 'Refunded' } as Record<string, string>)[status] ?? status; }

  async placeOrder(form: NgForm) {
    if (form.invalid || !this.cart.lines().length) return;
    this.submitting = true; this.error = '';
    try {
      const data = await this.api.query<{ placeOrder: Order }>(`mutation($input:OrderInput!){placeOrder(input:$input){${ORDER_FIELDS}}}`, { input: { ...this.model, company: this.model.company || null, items: this.cart.lines().map(l => ({ packageId: l.packageId, quantity: l.quantity })) } });
      this.order = data.placeOrder; this.cart.clear(); this.lookup = { referenceNumber: this.order.referenceNumber, email: this.order.email };
      this.notice = `Order ${this.order.referenceNumber} created. Complete payment using the instructions below.`;
    } catch (e) { this.error = (e as Error).message || 'We could not create your order.'; } finally { this.submitting = false; }
  }
  async confirmPayment(form: NgForm) {
    if (form.invalid || !this.order) return;
    this.submitting = true; this.error = ''; this.notice = '';
    try {
      const data = await this.api.query<{ confirmOrderPayment: Order }>(`mutation($ref:String!,$email:String!,$paymentReference:String!,$payerPhone:String){confirmOrderPayment(referenceNumber:$ref,email:$email,paymentReference:$paymentReference,payerPhone:$payerPhone){${ORDER_FIELDS}}}`, { ref: this.order.referenceNumber, email: this.order.email, paymentReference: this.confirmation.paymentReference, payerPhone: this.confirmation.payerPhone || null });
      this.order = data.confirmOrderPayment; this.notice = 'Thank you. Our team will verify your payment and confirm by email.';
    } catch (e) { this.error = (e as Error).message || 'We could not record your payment.'; } finally { this.submitting = false; }
  }
  async findOrder() {
    this.error = ''; this.notice = '';
    try {
      const data = await this.api.query<{ orderByReference: Order | null }>(`query($ref:String!,$email:String!){orderByReference(referenceNumber:$ref,email:$email){${ORDER_FIELDS}}}`, { ref: this.lookup.referenceNumber.trim(), email: this.lookup.email.trim() });
      this.order = data.orderByReference; if (!this.order) this.error = 'No order matches that reference and email.';
    } catch { this.error = 'Unable to look up this order right now.'; }
  }
}
