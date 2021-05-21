import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Order } from 'src/app/models/order.model';
import { OrderEditComponent } from '../order-edit/order-edit.component';
import { OrderService } from '../service/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  public dataSource = new MatTableDataSource<Order>();
  public displayedColumns: string[] = ['orderId', 'firstName', 'lastName', 'address', 'status', 'details'];

  constructor(private orderService: OrderService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getList();
  }

  getList(): void {
    this.orderService.getList().subscribe(list => {
      this.dataSource.data = list;
    });
  }

  details(element: any) {
    this.dialog.open(OrderEditComponent, {
      width: '600px',
      data: {
        order: element,
        isDetails: true
      }
    })
      .afterClosed()
      .subscribe(result => {
        this.getList();
      });
  }

}
