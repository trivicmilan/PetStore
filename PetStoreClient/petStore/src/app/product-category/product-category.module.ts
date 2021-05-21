import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductCategoryRoutingModule } from './product-category-routing.module';
import { ProductCategoryEditComponent } from './product-category-edit/product-category-edit.component';
import { ProductCategoryListComponent } from './product-category-list/product-category-list.component';
import { AppMaterialModule } from '../app-material/app-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductCategoryEditComponent,
    ProductCategoryListComponent
  ],
  imports: [
    CommonModule,
    ProductCategoryRoutingModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProductCategoryModule { }
