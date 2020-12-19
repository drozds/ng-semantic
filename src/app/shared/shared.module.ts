import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderDividerComponent } from './header-divider/header-divider.component';



@NgModule({
  declarations: [HeaderDividerComponent],
  imports: [
    CommonModule
  ],
  exports: [HeaderDividerComponent]
})
export class SharedModule { }
