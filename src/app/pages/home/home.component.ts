import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public phoneWA: string = '51925927848';
  public loQuieroLink: string = `https://wa.me/${this.phoneWA}?text=Hola, necesito información sobre internet para empresas`;

  public carrouselImgs = [
    {link: "", url:'assets/img/slide/sl-01-min.jpg'},
    {link: "", url:'assets/img/slide/sl-02-min.jpg'},
    {link: "", url:'assets/img/slide/sl-03-min.jpg'}
  ];

  constructor() { }

  ngOnInit(): void {

  }

}
