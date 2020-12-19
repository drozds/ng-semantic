import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeElementsComponent } from './home-elements/home-elements.component';


const routes: Routes = [
  { path: '', component: HomeElementsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElementsRoutingModule { }
