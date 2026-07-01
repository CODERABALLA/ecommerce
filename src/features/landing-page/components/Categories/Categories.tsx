import Link from "next/link";
import Image from "next/image";

const categories = [
    {
        name: "Footwear",
        image: "/images/categories/footwear.jpg",
    },
    {
        name: "Bags",
        image: "/images/categories/bags.jpg",
    },
    {
        name: "Accessories",
        image: "/images/categories/accessories.jpg",
    },
    {
        name: "Clothing",
        image: "/images/categories/clothing.jpg",
    },
    {
        name: "Electronics",
        image: "/images/categories/electronics.jpg",
    },
];

const Categories = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                <h2 className="text-4xl font-bold text-center mb-12">
                    Shop by Category
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">

                    {categories.map((category) => (

                        <Link
                            key={category.name}
                            href={`/products?category=${category.name}`}
                            className="group rounded-xl overflow-hidden shadow hover:shadow-xl transition duration-300"
                        >

                            <div className="relative h-64">

                                <Image
                                    src={category.image}
                                    alt={category.name}
                                    fill
                                    className="object-cover group-hover:scale-105 transition duration-300"
                                />

                            </div>

                            <div className="p-4 bg-white">

                                <h3 className="font-semibold text-lg">
                                    {category.name}
                                </h3>

                                <p className="text-gray-500 text-sm">
                                    Explore products
                                </p>

                            </div>

                        </Link>

                    ))}

                </div>

            </div>
        </section>
    );
};

export default Categories;