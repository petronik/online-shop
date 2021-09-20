import { Insurance } from "./insurance";
import { Size } from "./size";

export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
    sizes: Size[];
    insurance: String[];

}
