import { Injectable } from '@angular/core';
import { Groups } from '../components/products.model';
import { Observable } from 'rxjs';

import {
  Firestore, addDoc, collection, collectionData,
  doc, docData, deleteDoc, updateDoc, DocumentReference, setDoc
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})

export class CategoryService {
  title = 'FireBaseIntegration';

  constructor(private firestore: Firestore) { }

  addCategory(prod: Groups, location: string) {
    const groupsRef = collection(this.firestore, location);
    return addDoc(groupsRef, prod);
  }
  getCategory( location: string): Observable<Groups[]> {
    const groupsRef = collection(this.firestore, location);
    return collectionData(groupsRef, { idField: 'id' }) as Observable<Groups[]>;
  }

  deleteCategory(item: Groups, location: string) {
    const productRef = doc(this.firestore, `${location}/${item.id}`);
    return deleteDoc(productRef);
  }
}
