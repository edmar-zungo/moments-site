import { TestBed } from '@angular/core/testing';

import { DogsShopServiceService } from './dogs-shop-service.service';

describe('DogsShopServiceService', () => {
  let service: DogsShopServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DogsShopServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
