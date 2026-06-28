import Link from "next/link";
import { products } from "@/data/products";
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const FeaturedProducts = () => {
    const featured = products.slice(0, 6);

    return (
        <section className="px-8 py-16">
            <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {featured.map((product) => (
                    <Link key={product.id} href={`/products/${product.slug}`}>
                        <Card className="hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <Badge variant="secondary">{product.category}</Badge>
                                <CardTitle>{product.name}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600">${product.price}</p>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>
            <div className="text-center mt-8">
                <Link href="/products">
                    <Button>View More</Button>
                </Link>
            </div>
        </section>
    );
};

export default FeaturedProducts;