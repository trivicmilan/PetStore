import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { OrderItem } from 'src/app/models/order-item.model';
import { Order } from 'src/app/models/order.model';
import { ProductEditComponent } from 'src/app/product/product-edit/product-edit.component';
import { OrderService } from '../service/order.service';

@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.css']
})
export class OrderEditComponent implements OnInit {

  public form: FormGroup = new FormGroup({});
  public order: Order = new Order();
  public orderItemList: Array<OrderItem> = [];
  public isDetails = false;
  private lsKeyOrderId: string;
  
  constructor(public formBuilder: FormBuilder,
    private orderService: OrderService,
    private snackBar: MatSnackBar,
    private dialogRef: MatDialogRef<ProductEditComponent>,
    @Inject(MAT_DIALOG_DATA) data: any) {
    this.order = data?.order || new Order();
    this.isDetails = data?.isDetails || false;
    this.lsKeyOrderId = data?.lsKeyOrderId;
    this.getOrderItemList();
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      orderId: [this.order.orderId],
      firstName: [this.order.firstName, [Validators.required, Validators.maxLength(50)]],
      lastName: [this.order.lastName, Validators.required],
      address: [this.order.address, Validators.required],
      status: [this.order.status]
    });
  }
  
  finishPurchase({ value, valid }: { value: Order, valid: boolean }) {
    this.orderService.finishPurchase(value).subscribe(
      response => {
        localStorage.removeItem(this.lsKeyOrderId);
        this.form.reset();
        this.snackBar.open("Product modified.", undefined, {
          duration: 2000,
        });
        this.close();
      },
      err => {
        this.snackBar.open("Error! Data not saved.", undefined, {
          duration: 2000,
        });
      });
  }

  

  close() {
    this.dialogRef.close();
  }

  getOrderItemList(): void {
    this.orderService.getListItem(this.order.orderId).subscribe(list => {
      this.orderItemList = list;
    });
  }
}
