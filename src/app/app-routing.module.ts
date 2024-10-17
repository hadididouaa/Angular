import { CategoryDetailsComponent } from './category-details/category-details.component';
import { ProductsQPCategoryComponent } from './products-qpcategory/products-qpcategory.component';
import { ProductsCategoryComponent } from './products-category/products-category.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TestComponent } from './test/test.component';
import { HehomeComponent } from './hehome/hehome.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"", redirectTo:"home", pathMatch:"full"},
  {path:"home", component:HehomeComponent, children:[
    {path:"details/:id", component:CategoryDetailsComponent}
  ]},
  {path:"test", component:TestComponent},

  {path:"products/:id", component:ProductsCategoryComponent},
  {path:"products", component:ProductsQPCategoryComponent},
  {path:"**", component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
