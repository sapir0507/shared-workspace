export interface Item {
    id: number;
    title: string;
    description: string;
    price: number;
    enterDate: Date;
    inStock: boolean;
    imgUrl: string;
}

export interface User {
    id: number;
    username: string;
    password: string;
    fullName: string;
    email: string;
    phone: number;

}