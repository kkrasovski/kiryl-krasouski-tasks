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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
