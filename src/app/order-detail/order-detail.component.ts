import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { OrderService } from '../services/order.service';
import { IOrder } from '../model/order';
import { NewOrder } from '../class/newOrder';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {
  id: number;
  order: IOrder[];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private orderService: OrderService
  ) {}
  ngOnInit() {
    // Takes id off of the route
    this.route.params.subscribe(params => (this.id = +params['id']));
    // Gets the order by id
    this.orderService.getOrder(this.id).subscribe(resp => (this.order = resp));
  }
  // Navigates back to the order list
  goBack() {
    this.router.navigate(['order']);
  }
  // Saves the new order.  Creates a newOrder instance
  save(ord: IOrder) {
    const savedOrder = new NewOrder(ord.userId, ord.id, ord.title, ord.body);
    alert(JSON.stringify(savedOrder));
  }
}
