import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.scss']
})
export class PlaceholderComponent implements OnInit {
  @Input() lines = 3;
  @Input() isImageShown = true;
  
  constructor() { }

  ngOnInit(): void {
  }

}
