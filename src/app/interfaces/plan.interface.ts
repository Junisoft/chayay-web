export interface Plan {
    id: number;
    speed: string;
    cost: number;
    class: string;
}

export interface PlanList{
    id: number;
    title: string;
    plans: Plan[];
}