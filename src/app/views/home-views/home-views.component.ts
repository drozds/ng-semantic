import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-views',
  templateUrl: './home-views.component.html',
  styleUrls: ['./home-views.component.scss']
})
export class HomeViewsComponent implements OnInit {
  stats = [
    { value: 24, label: "Users"},
    { value: 143, label: "Reports"},
    { value: 3, label: "Revies"},
  ]

  items = [
    {
      imgSrc: "https://cdn.pixabay.com/photo/2020/11/02/13/15/reindeer-5706627__340.png",
      description: "Image of a dog sitting on its owner",
      title: "Dog"
    },
    {
      imgSrc: "https://cdn.pixabay.com/photo/2019/12/19/10/56/christmas-market-4705882__340.jpg",
      description: "New Year mood image",
      title: "New Year"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
