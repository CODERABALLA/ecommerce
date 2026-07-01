export type Product = {
    id: string;
    slug: string;
    name: string;
    price: number;
    category: string;
    images: string[];
    description: string;
};

const categories = [
    "Footwear",
    "Bags",
    "Accessories",
    "Clothing",
    "Electronics",
];

const productNames: Record<string, string[]> = {
    Footwear: ["Sneakers", "Boots", "Sandals", "Loafers", "Running Shoes"],
    Bags: ["Backpack", "Tote Bag", "Duffel Bag", "Messenger Bag", "Travel Bag"],
    Accessories: ["Watch", "Sunglasses", "Belt", "Wallet", "Hat"],
    Clothing: ["Jacket", "T-Shirt", "Jeans", "Sweater", "Shorts"],
    Electronics: ["Headphones", "Smartwatch", "Speaker", "Earbuds", "Charger"],
};
const productPrices: Record<string, number> = {
    Sneakers: 3499,
    Boots: 1999,
    Sandals: 3499,
    Loafers: 6999,
    "Running Shoes": 8999,

    Backpack: 1499,
    "Tote Bag": 2999,
    "Duffel Bag": 6499,
    "Messenger Bag": 5999,
    "Travel Bag": 9999,

    Watch: 699,
    Sunglasses: 2999,
    Belt: 399,
    Wallet: 599,
    Hat: 799,

    Jacket: 1999,
    "T-Shirt": 599,
    Jeans: 999,
    Sweater: 999,
    Shorts: 899,

    Headphones: 2499,
    Smartwatch: 1999,
    Speaker: 6499,
    Earbuds: 1200,
    Charger: 1499,
};
const generateProducts = (): Product[] => {
    const result: Product[] = [];
    let id = 1;

    categories.forEach((category) => {
        const names = productNames[category];

        names.forEach((baseName) => {
            const keyword = baseName.toLowerCase().replace(/\s+/g, "-");
            const slug = keyword;

            result.push({
                id: String(id),
                slug,
                name: baseName,
                price: productPrices[baseName],
                category,

                images: [
                    `/images/products/${keyword}.jpg`,
                ],

                description: `A high-quality ${baseName.toLowerCase()} from our ${category.toLowerCase()} collection, built for comfort, durability, and everyday style.`,
            });

            id++;
        });
    });

    return result;
};

export const products: Product[] = generateProducts();