import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductCategory } from 'src/app/models/product-category.model';
import { Product } from 'src/app/models/product.model';
import { ProductCategoryService } from 'src/app/product-category/service/product-category.service';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  public form: FormGroup = new FormGroup({});
  public product: Product = new Product();
  public productCategoryList: Array<ProductCategory> = [];
  private isEdit = false;

  constructor(public formBuilder: FormBuilder,
    private productService: ProductService,
    private productCategoryService: ProductCategoryService,
    private snackBar: MatSnackBar,
    private dialogRef: MatDialogRef<ProductEditComponent>,
    @Inject(MAT_DIALOG_DATA) data: any) {
    this.product = data?.product || new Product();
    this.isEdit = data?.isEdit || false;
    this.getProductCategoryList();
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: [this.product.name, Validators.required],
      code: [this.product.code, [Validators.required, Validators.maxLength(10)]],
      price: [this.product.price, Validators.required],
      quantityAvailable: [this.product.quantityAvailable, Validators.required],
      description: [this.product.description, Validators.required],
      productCategoryId: [this.product.productCategoryId, Validators.required]
    });
  }

  save({ value, valid }: { value: Product, valid: boolean }) {
    if (valid) {

      if (this.isEdit) {
        value.productId = this.product.productId;
        this.productService.edit(this.product.productId, value).subscribe(
          response => {
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
      } else {
        this.productService.add(value).subscribe(
          response => {
            this.form.reset();
            this.snackBar.open("The product is added.", undefined, {
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
    }
  }

  close() {
    this.dialogRef.close();
  }

  getProductCategoryList(): void {
    this.productCategoryService.getList().subscribe(list => {
      this.productCategoryList = list;
    });
  }

}
