export type Product = {
    id: string;
    slug: string;
    name: string;
    price: number;
    category: string;
    images: string[];
    description: string;
};

export const products: Product[] = [
    {
        id: "1",
        slug: "sneakers",
        name: "Sneakers",
        price: 49,
        category: "Footwear",
        images: ["/products/sneakers-1.jpg", "/products/sneakers-2.jpg", "/products/sneakers-3.jpg"],
        description: "Comfortable everyday sneakers built for all-day wear.",
    },
    {
        id: "2",
        slug: "backpack",
        name: "Backpack",
        price: 39,
        category: "Bags",
        images: ["/products/backpack-1.jpg", "/products/backpack-2.jpg", "/products/backpack-3.jpg"],
        description: "Durable backpack with multiple compartments for daily use.",
    },
    {
        id: "3",
        slug: "watch",
        name: "Watch",
        price: 89,
        category: "Accessories",
        images: ["/products/watch-1.jpg", "/products/watch-2.jpg", "/products/watch-3.jpg"],
        description: "A sleek analog watch that pairs with any outfit.",
    },
    {
        id: "4",
        slug: "sunglasses",
        name: "Sunglasses",
        price: 25,
        category: "Accessories",
        images: ["/products/sunglasses-1.jpg", "/products/sunglasses-2.jpg", "/products/sunglasses-3.jpg"],
        description: "UV-protected sunglasses with a classic frame.",
    },
    {
        id: "5",
        slug: "jacket",
        name: "Jacket",
        price: 120,
        category: "Clothing",
        images: ["/products/jacket-1.jpg", "/products/jacket-2.jpg", "/products/jacket-3.jpg"],
        description: "A warm, weatherproof jacket for cold seasons.",
    },
    {
        id: "6",
        slug: "headphones",
        name: "Headphones",
        price: 60,
        category: "Electronics",
        images: ["/products/headphones-1.jpg", "/products/headphones-2.jpg", "/products/headphones-3.jpg"],
        description: "Noise-isolating headphones with deep bass and clear highs.",
    },
];