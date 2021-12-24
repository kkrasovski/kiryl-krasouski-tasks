import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SummaryComponent } from './components/main/summary.component';
import { ProductsListComponent } from './components/list-product/products-list.component';
import { GroupComponent } from './components/list-category-group/group.component';
import { RoomsListComponent } from './components/list-category-room/rooms-list.component';
import { SingleComponent } from './components/single-product/single.component';
import {  NotFoundComponent } from './components/not-found.component';

import {Routes, RouterModule} from '@angular/router';
import { InCategoryComponent } from './components/in-category/in-category.component';
import { AddItemComponent } from './components/add-item-page/add-item.component';
import { ItemComponent } from './components/item/item.component';
import { AddBtnComponent } from './components/add-btn/add-btn.component';
import { AddCategoryComponent } from './components/add-category-page/add-category.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterProductsComponent } from './components/filter-products/filter-products.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './components/about/about.component';


import { environment } from '../environments/environment';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';




const appRoutes: Routes =[
  { path: '', component: SummaryComponent, },
  { path: 'products', component: ProductsListComponent,  },
  { path: 'rooms', component: RoomsListComponent,},
  { path: 'groups', component: GroupComponent, },
  { path: 'add', component: AddItemComponent },
  { path: 'about', component: AboutComponent },
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
    AboutComponent,


  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    // AngularFireModule,
    // AngularFireDatabaseModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
