/// <reference types="jasmine" />
import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { ApiService } from './api.service';

describe('ApiService', () => {
  let api: ApiService;
  let http: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [provideHttpClient(), provideHttpClientTesting()] });
    api = TestBed.inject(ApiService);
    http = TestBed.inject(HttpTestingController);
  });
  afterEach(() => http.verify());
  it('loads products from GraphQL rather than local fixtures', async () => {
    const result = api.products();
    const request = http.expectOne('/graphql');
    expect(request.request.body.query).toContain('products');
    request.flush({ data: { products: [] } });
    expect((await result).products).toEqual([]);
  });
  it('rejects GraphQL errors', async () => {
    const result = api.products();
    http.expectOne('/graphql').flush({ errors: [{ message: 'Unavailable' }] });
    await expectAsync(result).toBeRejectedWithError('Unavailable');
  });
  it('uses bearer authentication when uploading an image', async () => {
    api.token = 'test-token';
    const uploaded = api.uploadImage(new File(['data'], 'image.png', { type: 'image/png' }));
    const request = http.expectOne('/admin/uploads');
    expect(request.request.headers.get('Authorization')).toBe('Bearer test-token');
    expect(request.request.body instanceof FormData).toBeTrue();
    request.flush({ url: '/uploads/example.png' });
    expect(await uploaded).toBe('/uploads/example.png');
  });
  it('does not persist the access token to browser storage', async () => {
    const result = api.login('admin@example.com', 'password');
    http.expectOne('/auth/login').flush({ accessToken: 'test-token', role: 'admin' });
    await result;
    expect(api.token).toBe('test-token');
    api.logout();
    expect(api.token).toBe('');
  });
});
