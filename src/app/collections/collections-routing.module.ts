import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BiographyComponent } from './biography/biography.component';
import { CompaniesComponent } from './companies/companies.component';
import { HomeCollectionsComponent } from './home-collections/home-collections.component';
import { PartnersComponent } from './partners/partners.component';


const routes: Routes = [
  {
    path: '', component: HomeCollectionsComponent, children: [
      {
        path: '', component: BiographyComponent
      },
      {
        path: 'companies', component: CompaniesComponent
      },
      {
        path: 'partners', component: PartnersComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectionsRoutingModule { }
