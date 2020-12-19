import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-collections',
  templateUrl: './home-collections.component.html',
  styleUrls: ['./home-collections.component.scss']
})
export class HomeCollectionsComponent implements OnInit {
  data = [
    { name: 'Joe', age: 24, job: 'Designer' },
    { name: 'Chloe', age: 21, job: 'Engineer' },
    { name: 'Susann', age: 25, job: 'Architect' }
  ];

  headers = [
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job' }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
