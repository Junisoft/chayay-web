import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Plan, PlanList } from 'src/app/interfaces/plan.interface';

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
  plans: Plan[] = [
    {speed: '20 Mbps', cost: 50, class: ''},
    {speed: '30 Mbps', cost: 60, class: ''},
    {speed: '40 Mbps', cost: 70, class: ''},
    {speed: '60 Mbps', cost: 80, class: ''},
    {speed: '100 Mbps', cost: 100, class: ''},
    {speed: '150 Mbps', cost: 150, class: ''},
    {speed: '200 Mbps', cost: 200, class: ''},
    {speed: '250 Mbps', cost: 250, class: ''},
    {speed: '500 Mbps', cost: 450, class: ''}
  ];

  internetPlans: PlanList[] = [];

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    const myRoute = this.router.url;
    this.myCurrentUrl = myRoute.replace('/', '');
    this.generateCustomPlans()
  }

  getRowsForPlans(): void{
    var value1 = Math.round(this.plans.length / 4);
    var value2 = this.plans.length % 4;
    this.rows = value1 + value2;
    console.log('rows >', this.rows);
  }

  generateCustomPlans(): void{
    this.getRowsForPlans();
    let startIndex = 0, endIndex = 4;

    for(var i = 0; i < this.rows; i++){
      let tmpPlans = this.plans.slice(startIndex, endIndex);
      for(var j = 0; j < tmpPlans.length; j++){
        switch (j) {
          case 0: tmpPlans[j].class = 'col-lg-3 col-md-6';
          break;
          case 1: tmpPlans[j].class = 'col-lg-3 col-md-6 mt-4 mt-md-0';
          break;
          case 2: 
          case 3: tmpPlans[j].class = 'col-lg-3 col-md-6 mt-4 mt-lg-0';
          break;
        }
      }

      let item = {
        id: i+1,
        title: `Row-${i+1}`,
        plans: tmpPlans
      }
  
      this.internetPlans.push(item);

      startIndex += 4;
      endIndex += 4;
    }

    console.log('this.internetPlans >', this.internetPlans);
  }

}
