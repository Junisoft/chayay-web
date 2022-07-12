import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Plan } from 'src/app/interfaces/plan.interface';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {
  rows: number = 0;
  myCurrentUrl: string = '';
  phoneWA: string = '51925927848';
  loQuieroLink: string = `https://wa.me/${this.phoneWA}?text=Hola, necesito información sobre los planes`;
  internetPlans: Plan[] = [
    {speed: '20 Mbps', cost: 50},
    {speed: '30 Mbps', cost: 60},
    {speed: '40 Mbps', cost: 70},
    {speed: '60 Mbps', cost: 80},
    {speed: '100 Mbps', cost: 100},
    {speed: '150 Mbps', cost: 150},
    {speed: '200 Mbps', cost: 200},
    {speed: '250 Mbps', cost: 250},
    {speed: '500 Mbps', cost: 450}
  ];

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    const myRoute = this.router.url;
    this.myCurrentUrl = myRoute.replace('/', '');
    this.getRowsForPlans()
  }

  getRowsForPlans(): void{
    var value1 = Math.round(this.internetPlans.length / 4);
    var value2 = this.internetPlans.length % 4;
    this.rows = value1 + value2;
    console.log('rows >', this.rows);
  }

  generateCustomPlans(): void{
    //TODO
  }

}
