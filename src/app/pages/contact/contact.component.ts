import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ApiService, Product } from '../../core/api.service';
@Component({
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  styleUrl: './contact.component.scss',
  templateUrl: './contact.component.html',
})
export class ContactComponent implements OnInit {
  private api = inject(ApiService);
  private route = inject(ActivatedRoute);
  products: Product[] = [];
  settings: Record<string, string> = {};
  subjects = [
    'Product Inquiry',
    'Pricing Inquiry',
    'Custom Software',
    'Website Development',
    'Technical Support',
    'General Inquiry',
    'Other',
  ];
  model = {
    fullName: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    productId: '',
    message: '',
    consent: false,
    website: '',
  };
  sending = false;
  error = '';
  reference = '';
  async ngOnInit() {
    try {
      const [p, s] = await Promise.all([
        this.api.products(),
        this.api.settings(),
      ]);
      this.products = p.products;
      this.settings = Object.fromEntries(
        s.companySettings.map((x) => [x.key, x.value]),
      );
      this.model.productId =
        this.route.snapshot.queryParamMap.get('product') || '';
    } catch {
      this.error = 'Some options could not be loaded. Please try again later.';
    }
  }
  async submit(form: NgForm) {
    if (form.invalid || this.sending) {
      form.control.markAllAsTouched();
      return;
    }
    this.sending = true;
    this.error = '';
    this.reference = '';
    try {
      const data = await this.api.query<{
        submitInquiry: { referenceNumber: string };
      }>(
        'mutation ($input: InquiryInput!){ submitInquiry(input:$input){referenceNumber} }',
        { input: { ...this.model, productId: this.model.productId || null } },
      );
      this.reference = data.submitInquiry.referenceNumber;
      form.resetForm({
        subject: '',
        productId: '',
        consent: false,
        website: '',
      });
    } catch {
      this.error = 'Your message could not be sent. Please try again.';
    } finally {
      this.sending = false;
    }
  }
}
