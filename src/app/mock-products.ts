import { Product } from "./models/product";
import { Size } from "./models/size";

export const PRODUCTS: Product[] = [
    {
        id: 1,
        price: 455.99,
        imageUrl: "../assets/img/asus/asus_1.jpg",
        name:"ASUS",
        sizes: [Size.SMALL, Size.MEDIUM, Size.LARGE ],
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing.",
        insurance: ["1 Year", "3 Years"],
    },
    {
        id: 2,
        price: 779.99,
        imageUrl:  "../assets/img/dell/dell_1.jpg", 
        name:"DELL",
        sizes: [Size.SMALL, Size.MEDIUM, Size.LARGE ],
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing.",
        insurance: ["1 Year", "3 Years", "5 Years"],
    }
]
