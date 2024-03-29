import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Plan, PlanList } from 'src/app/interfaces/plan.interface';
import { AbstractPlanService } from 'src/app/services/plan.abstract-service';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {
  rows: number = 0;
  currentUrl: string = '';
  phoneWA: string = '51925927848';
  loQuieroLink: string = `https://wa.me/${this.phoneWA}?text=Hola, necesito información sobre los planes`;
  plans: Plan[] = [];
  internetPlans: PlanList[] = [];

  constructor(
    private router: Router, 
    private planService: AbstractPlanService) {
      this.getPlans();
  }

  ngOnInit(): void {
    const myRoute = this.router.url;
    this.currentUrl = myRoute.replace('/', '');
    this.getCustomPlans();
  }

  getPlans(): void{
    this.planService.getPlans().subscribe((resp: Plan[]) => {
      this.plans = resp;
    });
  }

  getRowsForPlans(): void{
    const value1 = Math.round(this.plans.length / 4);
    const value2 = this.plans.length % 4;
    this.rows = value1 + value2;
  }

  getCustomPlans(): void{
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
  }

}
