import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Plan } from '../interfaces/plan.interface';
import { AbstractPlanService } from './plan.abstract-service';

@Injectable({
  providedIn: 'root'
})
export class PlanService implements AbstractPlanService {

  constructor() { }

  public getPlans(): Observable<Plan[]> {
    throw new Error('Method not implemented.');
  }
  
}
