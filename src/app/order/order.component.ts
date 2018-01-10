import { Component, OnInit } from '@angular/core';
import { IOrder } from '../model/order';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  orders: IOrder[] = [];

  constructor( private _orderService: OrderService) { }

  ngOnInit() {
    this._orderService.getOrders().subscribe(orders => (this.orders = orders));
  }

}
