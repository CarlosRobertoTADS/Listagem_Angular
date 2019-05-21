import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from '../item.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detail-item',
  templateUrl: './detail-item.component.html',
  styleUrls: ['./detail-item.component.css']
})
export class DetailItemComponent implements OnInit {
  item: Item;
  constructor(private route: ActivatedRoute,
              private itemService: ItemService,
              private location: Location) 
              { }

  ngOnInit() {
    this.getItem();
  }

  getItem(): void {
    const id =+this.route.snapshot.paramMap.get('id');
    this.itemService.getItem(id).subscribe(item => this.item = item);
  }

  goBack(): void{
    this.location.back();
  }

}
