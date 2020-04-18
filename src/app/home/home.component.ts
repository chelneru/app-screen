import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  now: string;
  light: string;
  constructor() {
    setInterval(() => {
      this.now = new Date().toString().split(' ')[4];
      const hours = new Date().getHours();
      this.light = (hours >= 7 && hours <= 21) ? 'day' : 'night';
    }, 1);
  }

  ngOnInit(): void {
  }

}
