/// <reference types="jasmine" />
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { ApiService } from '../../core/api.service';
import { DemoComponent } from './demo.component';

describe('DemoComponent', () => {
  const product = { id: 'product-id', name: 'NABOO Sales System' };
  const api = { products: () => Promise.resolve({ products: [product] }), query: jasmine.createSpy('query') };
  beforeEach(async () => {
    api.query.calls.reset();
    await TestBed.configureTestingModule({ imports: [DemoComponent], providers: [provideRouter([]), { provide: ApiService, useValue: api }] }).compileComponents();
  });
  it('rejects a demo request with missing required fields', async () => {
    const fixture = TestBed.createComponent(DemoComponent);
    fixture.detectChanges();
    await fixture.whenStable();
    (fixture.nativeElement.querySelector('form') as HTMLFormElement).dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
    expect(api.query).not.toHaveBeenCalled();
  });
  it('submits the selected product and displays a reference', async () => {
    api.query.and.resolveTo({ requestDemo: { referenceNumber: 'DEMO-TEST' } });
    const fixture = TestBed.createComponent(DemoComponent);
    fixture.detectChanges();
    await fixture.whenStable();
    Object.assign(fixture.componentInstance.model, { fullName: 'Visitor', companyName: 'Example', email: 'visitor@example.com', phone: '12345678', productId: product.id, consent: true });
    fixture.detectChanges();
    await fixture.whenStable();
    (fixture.nativeElement.querySelector('form') as HTMLFormElement).dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
    await fixture.whenStable();
    fixture.detectChanges();
    expect(api.query).toHaveBeenCalled();
    expect(fixture.nativeElement.textContent).toContain('DEMO-TEST');
  });
});
