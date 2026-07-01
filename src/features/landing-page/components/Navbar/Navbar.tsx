"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";

const Navbar = () => {
    const { cart } = useCart();

    const totalItems = cart.reduce(
        (total, item) => total + item.quantity,
        0
    );

    return (
        <nav className="flex justify-between items-center px-8 py-4 shadow-md bg-white sticky top-0 z-50">

            <Link
                href="/"
                className="text-2xl font-bold"
            >
                MyShop
            </Link>

            <ul className="flex items-center gap-8">

                <li>
                    <Link href="/">Home</Link>
                </li>

                <li>
                    <Link href="/products">Products</Link>
                </li>

                <li>
                    <Link href="/about">About</Link>
                </li>

                <li>
                    <Link href="/why-us">Why Us</Link>
                </li>

                <li>
                    <Link href="/contact">Contact</Link>
                </li>

                <li>
                    <Link
                        href="/cart"
                        className="relative"
                    >
                        <ShoppingCart size={28} />

                        {totalItems > 0 && (
                            <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                {totalItems}
                            </span>
                        )}
                    </Link>
                </li>

            </ul>

        </nav>
    );
};

export default Navbar;