import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionsRoutingModule } from './collections-routing.module';
import { TableComponent } from './table/table.component';
import { HomeCollectionsComponent } from './home-collections/home-collections.component';
import { SharedModule } from '../shared/shared.module';
import { PartnersComponent } from './partners/partners.component';
import { CompaniesComponent } from './companies/companies.component';
import { BiographyComponent } from './biography/biography.component';
import { TabComponent } from './tab/tab.component';


@NgModule({
  declarations: [TableComponent, HomeCollectionsComponent, PartnersComponent, CompaniesComponent, BiographyComponent, TabComponent],
  imports: [
    CommonModule,
    CollectionsRoutingModule,
    SharedModule
  ]
})
export class CollectionsModule { }
