import { TestBed, inject } from '@angular/core/testing';

import { OrderService } from './order.service';
import { HttpClient } from 'selenium-webdriver/http';

describe('OrderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrderService, HttpClient]
    });
  });

  it('should be created', inject([OrderService], (service: OrderService) => {
    expect(service).toBeTruthy();
  }));
});
