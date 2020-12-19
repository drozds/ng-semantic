import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticsComponent } from './statistics/statistics.component';
import { HomeViewsComponent } from './home-views/home-views.component';
import { ViewsRoutingModule } from './views.-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ItemListComponent } from './item-list/item-list.component';



@NgModule({
  declarations: [StatisticsComponent, HomeViewsComponent, ItemListComponent],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    SharedModule
  ]
})
export class ViewsModule { }
