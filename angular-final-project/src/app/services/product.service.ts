import { Injectable } from '@angular/core';
import { Product } from '../components/products.model';
import { Observable } from 'rxjs';


import {
  Firestore, addDoc, collection, collectionData,
  doc, docData, deleteDoc, updateDoc, DocumentReference, setDoc
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  title = 'FireBaseIntegration';

  constructor(private firestore: Firestore) { }

  addProduct(prod: Product) {
    const productRef = collection(this.firestore, 'products');
    return addDoc(productRef, prod);
  }
  getProduct( location: string): Observable<Product[]> {
    const productRef =  collection(this.firestore, location);
    console.log(productRef)
    return collectionData(productRef, { idField: 'id' }) as Observable<Product[]>;
  }

  deleteProduct(item: Product) {
    const productRef = doc(this.firestore, `products/${item.id}`);
    return deleteDoc(productRef);
  }


}


