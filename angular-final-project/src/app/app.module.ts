import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SummaryComponent } from './components/summary/summary.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { GroupComponent } from './components/group/group.component';
import { RoomsListComponent } from './components/rooms-list/rooms-list.component';
import { SingleComponent } from './components/single/single.component';
import {  NotFoundComponent } from './components/not-found.component';

import {Routes, RouterModule} from '@angular/router';
import { InCategoryComponent } from './components/in-category/in-category.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { ItemComponent } from './components/item/item.component';
import { AddBtnComponent } from './components/add-btn/add-btn.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterProductsComponent } from './components/filter-products/filter-products.component';


// определение маршрутов
const appRoutes: Routes =[
  { path: '', component: SummaryComponent},
  { path: 'products', component: ProductsListComponent},
  { path: 'rooms', component: RoomsListComponent},
  { path: 'groups', component: GroupComponent},
  { path: 'add', component: AddItemComponent },
  { path: 'products/:productId', component: SingleComponent },
  { path: 'groups/:productId', component: InCategoryComponent },
  { path: 'rooms/:productId', component: InCategoryComponent },
  { path: 'add-item', component: AddItemComponent },
  { path: 'add-category', component: AddCategoryComponent },
  { path: '**', component: NotFoundComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    ProductsListComponent,
    GroupComponent,
    RoomsListComponent,
    SingleComponent,
    NotFoundComponent,
    InCategoryComponent,
    AddItemComponent,
    ItemComponent,
    AddBtnComponent,
    AddCategoryComponent,
    FilterProductsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
