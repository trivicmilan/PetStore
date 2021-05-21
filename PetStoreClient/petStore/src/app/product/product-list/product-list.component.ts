import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from 'src/app/models/product.model';
import { ProductEditComponent } from '../product-edit/product-edit.component';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public dataSource = new MatTableDataSource<Product>();
  public displayedColumns: string[] = ['name', 'code', 'price', 'quantityAvailable', 'description', 'productCategoryName', 'edit', 'delete'];

  constructor(private productService: ProductService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getList();
  }

  getList(): void {
    this.productService.getList().subscribe(list => {
      this.dataSource.data = list;
    });
  }

  add() {
    this.dialog.open(ProductEditComponent, {
      width: '600px'
    })
      .afterClosed()
      .subscribe(result => {
        this.getList();
      });
  }
  edit(element: any) {
    this.dialog.open(ProductEditComponent, {
      width: '600px',
      data: {
        product: element,
        isEdit: true
      }
    })
      .afterClosed()
      .subscribe(result => {
        this.getList();
      });
  }

  delete(element: any) {
    this.productService.delete(element.productId).subscribe(response => {
      this.getList();
    });
  }
}
