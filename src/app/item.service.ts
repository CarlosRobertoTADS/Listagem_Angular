import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Item } from './item';
import { ITENS } from './lista-itens';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }

  getItens(): Observable<Item[]> {
    
    return of(ITENS);
  }

  getItem(id: number): Observable<Item> {
    
    return of(ITENS.find(item => item.id === id));
  }


}
