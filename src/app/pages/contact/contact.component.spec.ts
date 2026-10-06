/// <reference types="jasmine" />
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { ApiService } from '../../core/api.service';
import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
  const api = { products: () => Promise.resolve({ products: [] }), settings: () => Promise.resolve({ companySettings: [] }), query: jasmine.createSpy('query') };
  beforeEach(async () => {
    api.query.calls.reset();
    await TestBed.configureTestingModule({ imports: [ContactComponent], providers: [provideRouter([]), { provide: ApiService, useValue: api }] }).compileComponents();
  });
  it('requires contact fields before submitting', async () => {
    const fixture = TestBed.createComponent(ContactComponent);
    fixture.detectChanges();
    await fixture.whenStable();
    const form = fixture.nativeElement.querySelector('form') as HTMLFormElement;
    form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
    expect(api.query).not.toHaveBeenCalled();
  });
  it('shows a reference when an inquiry is accepted', async () => {
    api.query.and.resolveTo({ submitInquiry: { referenceNumber: 'INQ-TEST' } });
    const fixture = TestBed.createComponent(ContactComponent);
    fixture.detectChanges();
    await fixture.whenStable();
    const component = fixture.componentInstance;
    Object.assign(component.model, { fullName: 'Visitor', email: 'visitor@example.com', subject: 'General Inquiry', message: 'Please call me', consent: true });
    fixture.detectChanges();
    await fixture.whenStable();
    (fixture.nativeElement.querySelector('form') as HTMLFormElement).dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
    await fixture.whenStable();
    fixture.detectChanges();
    expect(api.query).toHaveBeenCalled();
    expect(fixture.nativeElement.textContent).toContain('INQ-TEST');
  });
});
