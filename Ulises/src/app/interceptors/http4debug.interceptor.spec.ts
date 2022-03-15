import { TestBed } from '@angular/core/testing';

import { Http4debugInterceptor } from './http4debug.interceptor';

describe('Http4debugInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      Http4debugInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: Http4debugInterceptor = TestBed.inject(Http4debugInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
