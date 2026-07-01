"use client";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useCart } from "@/context/CartContext";

import { products } from "@/data/products";
import { formatCurrency } from "@/lib/currency";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

const ProductSlugPage = () => {

    const { slug } = useParams<{ slug: string }>();

    const { addToCart } = useCart();

    const product = products.find((p) => p.slug === slug);

    if (!product) {
        return <p>Product not found.</p>;
    }



    const related = products.filter(
        (p) => p.category === product.category && p.slug !== product.slug
    );

    return (
        <main className="max-w-7xl mx-auto px-6 py-16">

            {/* Product Section */}
            <section className="grid lg:grid-cols-2 gap-16 items-start">

                {/* Left Column */}
                <div>
                    <Carousel className="w-full max-w-lg mx-auto">
                        <CarouselContent>
                            {product.images.map((img, index) => (
                                <CarouselItem key={index}>
                                    <div className="relative w-full h-[500px]">
                                        <Image
                                            src={img}
                                            alt={`${product.name} ${index + 1}`}
                                            fill
                                            className="object-cover rounded-xl"
                                        />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>

                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>

                {/* Right Column */}
                <div>

                    <Badge variant="secondary" className="mb-4">
                        {product.category}
                    </Badge>

                    <h1 className="text-4xl font-bold mb-4">
                        {product.name}
                    </h1>

                    <p className="text-3xl font-semibold mb-6">
                        {formatCurrency(product.price)}
                    </p>

                    <p className="text-gray-600 leading-7">
                        {product.description}
                    </p>

                    <div className="mt-8">

                        <p className="text-green-600 font-semibold mb-6">
                            ✓ In Stock
                        </p>

                        <div className="flex flex-col gap-4">

                            <button
                                onClick={() => addToCart(product)}
                                className="bg-black text-white py-4 rounded-lg hover:bg-gray-800 transition"
                            >
                                Add to Cart
                            </button>

                            <button className="border border-black py-4 rounded-lg hover:bg-black hover:text-white transition">
                                Add to Wishlist
                            </button>

                        </div>

                    </div>

                </div>

            </section>

            {/* Related Products */}
            {related.length > 0 && (
                <section className="mt-20">

                    <h2 className="text-2xl font-bold mb-8">
                        Related Products
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                        {related.map((rp) => (
                            <Link
                                key={rp.id}
                                href={`/products/${rp.slug}`}
                            >
                                <Card className="hover:shadow-xl transition-shadow">

                                    <div className="relative w-full h-56">
                                        <Image
                                            src={rp.images[0]}
                                            alt={rp.name}
                                            fill
                                            className="object-cover rounded-t-lg"
                                        />
                                    </div>

                                    <CardHeader>
                                        <Badge
                                            variant="secondary"
                                            className="w-fit mb-2"
                                        >
                                            {rp.category}
                                        </Badge>

                                        <CardTitle>
                                            {rp.name}
                                        </CardTitle>
                                    </CardHeader>

                                    <CardContent>
                                        <p className="font-semibold">
                                            {formatCurrency(rp.price)}
                                        </p>
                                    </CardContent>

                                </Card>
                            </Link>
                        ))}

                    </div>

                </section>
            )}

        </main>
    );
};

export default ProductSlugPage;