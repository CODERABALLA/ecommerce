import Image from "next/image";
import Link from "next/link";

const Hero = () => {
    return (
        <section className="bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">

                {/* Left Content */}
                <div className="flex-1 text-center lg:text-left">

                    <p className="text-blue-600 font-semibold uppercase tracking-wider">
                        New Collection 2026
                    </p>

                    <h1 className="mt-4 text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
                        Discover Premium Products
                    </h1>

                    <p className="mt-6 text-lg text-gray-600 max-w-xl">
                        Shop quality footwear, clothing, electronics,
                        bags and accessories at affordable prices.
                        Fast delivery across Kenya and secure checkout.
                    </p>

                    <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

                        <Link
                            href="/products"
                            className="bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition text-center"
                        >
                            Shop Now
                        </Link>

                        <Link
                            href="/products"
                            className="border border-black px-8 py-4 rounded-lg hover:bg-black hover:text-white transition text-center"
                        >
                            Explore Products
                        </Link>
                    </div>

                </div>

                {/* Right Image */}

                <div className="flex-1 flex justify-center">

                    <Image
                        src="/images/hero/hero-banner.jpg"
                        alt="Shopping"
                        width={600}
                        height={600}
                        priority
                    />


                </div>

            </div>
        </section>
    );
};

export default Hero;