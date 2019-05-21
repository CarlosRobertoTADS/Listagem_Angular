import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailItemComponent } from './detail-item/detail-item.component';
import { ItemComponent } from './item/item.component';

const routes: Routes = [
  { path: '', redirectTo: '/itens', pathMatch: 'full' },
  
  { path: 'detail/:id', component: DetailItemComponent },
  { path: 'itens', component: ItemComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
