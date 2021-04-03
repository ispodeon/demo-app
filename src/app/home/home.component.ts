import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // titles: string[] = [
  //   "Blog template",
  //   "Sunt nulla",
  //   "Android.com website",
  //   "Dashboard template",
  //   "Text-heavy website",
  //   "Ex officia laborum",
  //   "Stand-alone article",
  //   "MDL website",
  //   "Consequat ut quis"
  // ];
  titles: string[] = [
    "Dashboard template",
    "Text-heavy website",
    "Ex officia laborum"
  ];
  descriptions: string[] = [];
  images: string[] = [];

  constructor() { }

  ngOnInit() {
  }

}
