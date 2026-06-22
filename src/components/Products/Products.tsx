"use client";

import { useState } from "react";

const allProducts = [
    { id: 1, name: "Sneakers", price: "$49" },
    { id: 2, name: "Backpack", price: "$39" },
    { id: 3, name: "Watch", price: "$89" },
    { id: 4, name: "Sunglasses", price: "$25" },
    { id: 5, name: "Jacket", price: "$120" },
    { id: 6, name: "Headphones", price: "$60" },
];

const Products = () => {
    const [visibleCount, setVisibleCount] = useState(3);

    const showMore = () => {
        setVisibleCount((prev) => prev + 3);
    };

    return (
        <section id="products" className="px-8 py-16">
            <h2 className="text-2xl font-bold mb-6">Our Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {allProducts.slice(0, visibleCount).map((product) => (
                    <div key={product.id} className="border rounded p-4 text-center">
                        <h3 className="font-semibold">{product.name}</h3>
                        <p className="text-gray-600">{product.price}</p>
                    </div>
                ))}
            </div>
            {visibleCount < allProducts.length && (
                <div className="text-center mt-6">
                    <button
                        onClick={showMore}
                        className="bg-black text-white px-6 py-2 rounded"
                    >
                        View More
                    </button>
                </div>
            )}
        </section>
    );
};

export default Products;