import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare function customInitFunctions();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  showCarousel: boolean;

  constructor() {
  }

  ngOnInit(): void {
    customInitFunctions();
  }

}
