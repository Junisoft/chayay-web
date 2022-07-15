import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Plan } from '../../interfaces/plan.interface';
import { AbstractPlanService } from '../plan.abstract-service';
import * as PlanData from '../../data/plans.json';

@Injectable({
  providedIn: 'root'
})
export class MockPlanService implements AbstractPlanService {
  private readonly listPlans: Plan[];

  constructor() {
    const plans = (PlanData as any).default;
    this.listPlans = new Array<Plan>(...plans);
  }

  public getPlans(): Observable<Plan[]> {
    return of([...this.listPlans]);
  }
}
