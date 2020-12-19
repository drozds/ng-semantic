import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-mods',
  templateUrl: './home-mods.component.html',
  styleUrls: ['./home-mods.component.scss']
})
export class HomeModsComponent implements OnInit {
  openModal = false;
  items = [
    { title:"FAQ", content: "Who are you? We are ducks" },
    { title:"How you became a duck?", content: "I was born by my bich duck mother" },
    { title:"When do you like do drink vodka", content: "Every second of my duck life" }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onOpenModalClick() {
    this.openModal = !this.openModal;
  }
}
