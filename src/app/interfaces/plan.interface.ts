export interface Plan {
    speed: string;
    cost: number;
    class: string;
}

export interface PlanList{
    id: number;
    title: string;
    plans: Plan[];
}