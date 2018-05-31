
import {throwError as observableThrowError,  Observable } from 'rxjs';

import {catchError, map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import '../shared/rxjs-extensions';
// The Order model
import { IOrder } from '../model/order';

@Injectable()
export class OrderService {
  // private ordersUrl = 'api/orders';
  private ordersUrl = 'https://jsonplaceholder.typicode.com/posts';
  private orderUrl = 'https://jsonplaceholder.typicode.com/posts/';

  constructor(private http: HttpClient) {}

  getOrders(): Observable<IOrder[]> {
    return (
      this.http
        .get<any>(this.ordersUrl).pipe(
        // .do(data => console.log(JSON.stringify(data)))
        map(data => data),
        catchError(this.handleError),)
    );
  }
  getOrder(id): Observable<IOrder[]> {
    return (
      this.http
        .get<any>(this.orderUrl + id).pipe(
        // .do(data => console.log(JSON.stringify(data)))
        map(data => data),
        catchError(this.handleError),)
    );
  }
  private handleError(error: Response) {
    console.error(error);
    return observableThrowError(error);
  }
}
