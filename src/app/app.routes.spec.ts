/// <reference types="jasmine" />
import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { ApiService } from './core/api.service';
import { routes } from './app.routes';

describe('route protection', () => {
  it('redirects visitors away from the admin dashboard', async () => {
    TestBed.configureTestingModule({ providers: [provideRouter(routes), { provide: ApiService, useValue: { token: '' } }] });
    const router = TestBed.inject(Router);
    await router.navigateByUrl('/admin/dashboard');
    expect(router.url).toBe('/admin/login');
  });
});
