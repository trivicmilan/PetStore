import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductCategory } from 'src/app/models/product-category.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductCategoryService {
  
  apiUrl = environment.apiUrl + 'api/productCategory/';
  
  constructor(private http: HttpClient) { }

  public getList(): Observable<ProductCategory[]>{
    return this.http.get<ProductCategory[]>(this.apiUrl);
  }

  public add(element: ProductCategory){
    return this.http.post(this.apiUrl,element);
  }

  public edit(id: number | null, element: ProductCategory){
    return this.http.put(this.apiUrl + id,element);
  }

  public delete(id: number) {
    return this.http.delete(this.apiUrl + id);
  }
  
}
