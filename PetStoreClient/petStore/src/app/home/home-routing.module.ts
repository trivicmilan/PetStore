import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormContainerComponent } from '../form-container/form-container.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: '',
    component: FormContainerComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
