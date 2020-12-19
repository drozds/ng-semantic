import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementsRoutingModule } from './elements-routing.module';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { SegmentComponent } from './segment/segment.component';
import { HomeElementsComponent } from './home-elements/home-elements.component';
import { SharedModule } from '../shared/shared.module';
import { TimesDirective } from './times.directive';


@NgModule({
  declarations: [PlaceholderComponent, SegmentComponent, HomeElementsComponent, TimesDirective],
  imports: [
    CommonModule,
    ElementsRoutingModule,
    SharedModule
  ]
})
export class ElementsModule { }
