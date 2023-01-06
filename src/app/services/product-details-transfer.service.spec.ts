import { TestBed } from '@angular/core/testing';

import { ProductDetailsTransferService } from './product-details-transfer.service';

describe('ProductDetailsTransferService', () => {
  let service: ProductDetailsTransferService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductDetailsTransferService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
