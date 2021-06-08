import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public phoneWA: string = '51925927848';
  public loQuieroLink: string = `https://wa.me/${this.phoneWA}?text=Hola, necesito información sobre internet para empresas`;

  constructor() { }

  ngOnInit(): void {
    // const state = this.router.url === '/inicio';
    // this.commonService.sendData(state);
  }

}
