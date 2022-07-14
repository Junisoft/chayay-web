import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Plan } from '../interfaces/plan.interface';
import { AbstractPlanService } from './plan.abstract-service';

@Injectable({
  providedIn: 'root'
})
export class MockPlanService implements AbstractPlanService {
  private readonly listPlans: Plan[];

  constructor() {
    this.listPlans = new Array<Plan>();
    this.listPlans.push({speed: '20 Mbps', cost: 50, class: ''});
    this.listPlans.push({speed: '30 Mbps', cost: 60, class: ''});
    this.listPlans.push({speed: '40 Mbps', cost: 70, class: ''});
    this.listPlans.push({speed: '60 Mbps', cost: 80, class: ''});
    this.listPlans.push({speed: '100 Mbps', cost: 100, class: ''});
    this.listPlans.push({speed: '150 Mbps', cost: 150, class: ''});
    this.listPlans.push({speed: '200 Mbps', cost: 200, class: ''});
    this.listPlans.push({speed: '250 Mbps', cost: 250, class: ''});
    this.listPlans.push({speed: '500 Mbps', cost: 450, class: ''});
  }

  public getPlans(): Observable<Plan[]> {
    return of([...this.listPlans]);
  }
}
