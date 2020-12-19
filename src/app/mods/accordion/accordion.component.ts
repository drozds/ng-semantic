import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {
  @Input() items = [];
  currentItemIndex = -1;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(index: number) {
    if (this.currentItemIndex === index) {
      this.currentItemIndex = -1
    } else {
      this.currentItemIndex = index;
    }
  }
}
