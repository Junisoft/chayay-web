import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {

  public myCurrentUrl: string = '';
  public phoneWA: string = '51925927848';
  public loQuieroLink: string = `https://wa.me/${this.phoneWA}?text=Hola, necesito información sobre los planes`;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    const myRoute = this.router.url;
    this.myCurrentUrl = myRoute.replace('/', '');
  }

}
