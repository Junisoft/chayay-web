import { Observable } from "rxjs";
import { Plan } from "../interfaces/plan.interface";

export abstract class AbstractPlanService {
    public abstract getPlans(): Observable<Plan[]>;
}