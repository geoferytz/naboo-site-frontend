import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ApiService, Product } from '../../core/api.service';
@Component({
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  styleUrl: './demo.component.scss',
  templateUrl: './demo.component.html',
})
export class DemoComponent implements OnInit {
  private api = inject(ApiService);
  private route = inject(ActivatedRoute);
  products: Product[] = [];
  today = new Date().toISOString().slice(0, 10);
  model = {
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    productId: '',
    businessType: '',
    preferredDate: '',
    preferredTime: '',
    additionalInformation: '',
    consent: false,
    website: '',
  };
  sending = false;
  error = '';
  loadError = '';
  reference = '';
  ngOnInit() {
    this.load();
  }
  async load() {
    this.loadError = '';
    try {
      this.products = (await this.api.products()).products;
      this.model.productId =
        this.route.snapshot.queryParamMap.get('product') || '';
    } catch {
      this.loadError = 'Products could not be loaded.';
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
      const result = await this.api.query<{
        requestDemo: { referenceNumber: string };
      }>(
        'mutation ($input:DemoInput!){requestDemo(input:$input){referenceNumber}}',
        { input: this.model },
      );
      this.reference = result.requestDemo.referenceNumber;
      form.resetForm({ productId: '', consent: false, website: '' });
    } catch {
      this.error = 'We could not submit your request. Please try again.';
    } finally {
      this.sending = false;
    }
  }
}
