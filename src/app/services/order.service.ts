import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// rxjs
import { Observable } from 'rxjs/Observable';
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
        .get<any>(this.ordersUrl)
        // .do(data => console.log(JSON.stringify(data)))
        .map(data => data)
        .catch(this.handleError)
    );
  }
  getOrder(id): Observable<IOrder[]> {
    return (
      this.http
        .get<any>(this.orderUrl + id)
        // .do(data => console.log(JSON.stringify(data)))
        .map(data => data)
        .catch(this.handleError)
    );
  }
  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error);
  }
}
