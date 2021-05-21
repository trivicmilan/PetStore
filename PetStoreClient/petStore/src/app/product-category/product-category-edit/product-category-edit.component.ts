import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductCategory } from 'src/app/models/product-category.model';
import { ProductCategoryService } from '../service/product-category.service';

@Component({
  selector: 'app-product-category-edit',
  templateUrl: './product-category-edit.component.html',
  styleUrls: ['./product-category-edit.component.css']
})
export class ProductCategoryEditComponent implements OnInit {

  public form: FormGroup = new FormGroup({});
  public productCategory: ProductCategory = new ProductCategory();
  private isEdit = false;

  constructor(public formBuilder: FormBuilder,
    private productCategoryService: ProductCategoryService,
    private snackBar: MatSnackBar,
    private dialogRef: MatDialogRef<ProductCategoryEditComponent>,
    @Inject(MAT_DIALOG_DATA) data: any) {
    this.productCategory = data?.productCategory || new ProductCategory();
    this.isEdit = data?.isEdit || false;
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: [this.productCategory.name, Validators.required]
    });
  }

  save({ value, valid }: { value: ProductCategory, valid: boolean }) {
    if (valid) {

      if (this.isEdit) {
        value.productCategoryId = this.productCategory.productCategoryId;
        this.productCategoryService.edit(this.productCategory.productCategoryId, value).subscribe(
          response => {
            this.form.reset();
            this.snackBar.open("Product category modified.", undefined, {
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
        this.productCategoryService.add(value).subscribe(
          response => {
            this.form.reset();
            this.snackBar.open("The product category is added.", undefined, {
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

}
