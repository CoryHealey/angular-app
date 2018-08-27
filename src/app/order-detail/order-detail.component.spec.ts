import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDetailComponent } from './order-detail.component';
import { ActivatedRoute } from '@angular/router';

describe('OrderDetailComponent', () => {
  let component: OrderDetailComponent;
  let fixture: ComponentFixture<OrderDetailComponent>;
  // tslint:disable-next-line:prefer-const
  let mockActivateRoute;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OrderDetailComponent],
      providers: [{ provide: ActivatedRoute, useValue: mockActivateRoute }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
