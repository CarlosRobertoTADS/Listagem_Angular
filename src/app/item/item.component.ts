import { Component, OnInit } from '@angular/core';
import { ITENS } from '../lista-itens';
import { Item } from '../item';
import { ItemService } from '../item.service';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  itens: Item[];
  
  constructor(private itemService: ItemService) { }

  ngOnInit() {
  this.getItens();
}


getItens(): void {
  this.itemService.getItens().subscribe(itens => this.itens = itens);
}
}

