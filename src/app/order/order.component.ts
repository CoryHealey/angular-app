import { Component, OnInit } from '@angular/core';
import { IOrder } from '../model/order';
import { OrderService } from '../services/order.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orders: IOrder[] = [];

  constructor(
    private _orderService: OrderService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    // Gets the list of orders
    this._orderService.getOrders().subscribe(orders => (this.orders = orders));
  }
  // Captures id of order and appends it to the route
  orderSelect(id: number) {
    this.router.navigate(['detail', id]);
  }
}
