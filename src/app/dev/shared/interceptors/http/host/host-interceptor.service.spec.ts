import { HostInterceptor } from './host-interceptor.service';
import { TestBed, inject } from '@angular/core/testing';

describe('HostInterceptor', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HostInterceptor]
    });
  });

  it('should be created', inject([HostInterceptor], (service: HostInterceptor) => {
    expect(service).toBeTruthy();
  }));
});
