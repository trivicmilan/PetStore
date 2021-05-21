import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderItem } from 'src/app/models/order-item.model';
import { Order } from 'src/app/models/order.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  apiUrl = environment.apiUrl + 'api/order/';
  
  constructor(private http: HttpClient) { }

  public getList(): Observable<Order[]>{
    return this.http.get<Order[]>(this.apiUrl);
  }

  public add(element: Order){
    return this.http.post(this.apiUrl,element);
  }

  public addOrderItem(productId: number | null, orderId: number | null){
    let item = new OrderItem();
    item.orderId = orderId;
    item.productId = productId;
    return this.http.post(this.apiUrl, item);
  }

  getListItem(orderId: number | null) {
    return this.http.get<OrderItem[]>(this.apiUrl + 'items/' + orderId);
  }

  public finishPurchase(element: Order){
    return this.http.put(this.apiUrl + 'finishPurchase',element);
  }
}
