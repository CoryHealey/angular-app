import { Injectable } from '@angular/core';

// rxjs
import { Observable } from 'rxjs/Observable';
import '../shared/rxjs-extensions';
import { IOrder } from '../model/order';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Response } from '@angular/http';

@Injectable()
export class OrderService {

  private ordersUrl = 'api/orders';

  constructor(private http: HttpClient) {}

  getOrders(): Observable<any> {
    return (
      this.http.get<any>(this.ordersUrl)
        .do(data => console.log(JSON.stringify(data)))
        // .map(data => data.json())
        .catch(this.handleError)
    );
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error);
  }
}
