export type Category = {
    id: number;
    name: string;
}

export type ActivityForm = {
    id: string;
    category: number;
    activity: string;
    calories: number;
}