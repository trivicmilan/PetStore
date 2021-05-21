import { _isNumberValue } from '@angular/cdk/coercion';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Order } from 'src/app/models/order.model';
import { Product } from 'src/app/models/product.model';
import { OrderEditComponent } from 'src/app/order/order-edit/order-edit.component';
import { OrderService } from 'src/app/order/service/order.service';
import { ProductService } from 'src/app/product/service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private LS_KEY_ORDER_ID: string = "lsKeyOrderId";
  public productList: Array<Product> =[];

  constructor(private productService: ProductService,
    private orderService: OrderService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,) { }

  ngOnInit(): void {
    this.getList();
  }

  getList(): void {
    this.productService.getList().subscribe(list => {
      this.productList = list;
    });
  }

  public addCard(productId: number | null){
    let orderId : number | null = null;
    let orderIdValue = localStorage.getItem(this.LS_KEY_ORDER_ID);
    if(orderIdValue != null || _isNumberValue(orderIdValue)){
      orderId = Number(orderIdValue);
    }
    this.orderService.addOrderItem(productId,  orderId).subscribe(
      response =>{
        console.log(response);
        if(_isNumberValue(response)){
          localStorage.setItem(this.LS_KEY_ORDER_ID, response.toString());
        }
      }
    );
  }
  
  public showCard(){
    let orderIdValue = localStorage.getItem(this.LS_KEY_ORDER_ID);
    if(orderIdValue != null || _isNumberValue(orderIdValue)){
      let order = new Order();
      order.orderId = Number(orderIdValue);
      this.dialog.open(OrderEditComponent, {
        width: '600px',
        data: {
          order : order,
          isDetails: false,
          lsKeyOrderId: this.LS_KEY_ORDER_ID
        }
      });
    }else{
      this.snackBar.open("Card is empty.", undefined, {
        duration: 2000,
      });
    }
  }

}
