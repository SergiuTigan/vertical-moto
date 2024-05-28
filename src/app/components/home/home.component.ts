import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  carouselItems: number[] = Array.from({ length: 5 }, (_, i) => Number(`${i + 1}`));
  currentItem = 1;

  constructor() {
  }

  ngOnInit() {

  }

}
