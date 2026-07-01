"use client";

import { useState } from "react";
import Link from "next/link";
import { products } from "@/data/products";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { formatCurrency } from "@/lib/currency";
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from "@/components/ui/select";
import Image from "next/image";

const categories = ["All", ...new Set(products.map((p) => p.category))];

const ProductsPage = () => {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");

    const filtered = products.filter((product) => {
        const matchesSearch = product.name
            .toLowerCase()
            .includes(search.toLowerCase());
        const matchesCategory = category === "All" || product.category === category;
        return matchesSearch && matchesCategory;
    });

    return (
        <main className="px-8 py-16">
            <h1 className="text-3xl font-bold mb-8">All Products</h1>

            <span className="flex flex-col sm:flex-row gap-4 mb-8">
                <Input
                    placeholder="Search products..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="sm:w-64"
                />

                <Select value={category} onValueChange={setCategory}>
                    <SelectTrigger className="sm:w-48">
                        <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent>
                        {categories.map((cat) => (
                            <SelectItem key={cat} value={cat}>
                                {cat}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </span>

            {filtered.length === 0 ? (
                <p className="text-gray-500">No products match your search.</p>
            ) : (
                <span className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {filtered.map((product) => (
                        <Link key={product.id} href={`/products/${product.slug}`}>
                            <Card className="hover:shadow-lg transition-shadow">
                                <div className="relative w-full h-64">
                                    <Image
                                        src={product.images[0]}
                                        alt={product.name}
                                        fill
                                        className="object-cover rounded-t-lg"
                                    />
                                </div>


                                <CardHeader>
                                    <Badge variant="secondary">{product.category}</Badge>
                                    <CardTitle>{product.name}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600">{formatCurrency(product.price)}</p>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </span>
            )}
        </main>
    );
};

export default ProductsPage;