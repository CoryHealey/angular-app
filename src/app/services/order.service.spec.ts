import { TestBed, inject } from '@angular/core/testing';

import { OrderService } from './order.service';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

describe('OrderService', () => {
  let httpTestingController: HttpTestingController;
  let service: OrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [OrderService]
    });
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(OrderService);
  });

  // it('should be created', inject([OrderService], (service: OrderService) => {
  //   expect(service).toBeTruthy();
  // }));

  describe('getOrder', () => {
    it('should call get with the correct URL', () => {
      service.getOrder(4).subscribe();

      // tslint:disable-next-line:quotemark
      const req = httpTestingController.expectOne('4');
      req.flush({ id: 4 });
      httpTestingController.verify();
    });
  });
});
