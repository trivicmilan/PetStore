import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  apiUrl = environment.apiUrl + 'api/product/';
  
  constructor(private http: HttpClient) { }

  public getList(): Observable<Product[]>{
    return this.http.get<Product[]>(this.apiUrl);
  }

  public add(element: Product){
    return this.http.post(this.apiUrl,element);
  }

  public edit(id: number | null, element: Product){
    return this.http.put(this.apiUrl + id,element);
  }

  public delete(id: number) {
    return this.http.delete(this.apiUrl + id);
  }

}
