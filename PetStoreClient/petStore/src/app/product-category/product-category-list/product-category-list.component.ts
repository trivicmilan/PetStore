import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ProductCategory } from 'src/app/models/product-category.model';
import { ProductCategoryEditComponent } from '../product-category-edit/product-category-edit.component';
import { ProductCategoryService } from '../service/product-category.service';

@Component({
  selector: 'app-product-category-list',
  templateUrl: './product-category-list.component.html',
  styleUrls: ['./product-category-list.component.css']
})
export class ProductCategoryListComponent implements OnInit {

 
  public dataSource = new MatTableDataSource<ProductCategory>();
  public displayedColumns: string[] = ['name', 'edit', 'delete'];

  constructor(private productCategoryService: ProductCategoryService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getList();
  }

  getList(): void {
    this.productCategoryService.getList().subscribe(list => {
      this.dataSource.data = list;
    });
  }

  add() {
    this.dialog.open(ProductCategoryEditComponent, {
      width: '600px'
    })
      .afterClosed()
      .subscribe(result => {
        this.getList();
      });
  }
  edit(element: any) {
    this.dialog.open(ProductCategoryEditComponent, {
      width: '600px',
      data: {
        productCategory: element,
        isEdit: true
      }
    })
      .afterClosed()
      .subscribe(result => {
        this.getList();
      });
  }

  delete(element: any) {
    this.productCategoryService.delete(element.productCategoryId).subscribe(response => {
      this.getList();
    });
  }
}
