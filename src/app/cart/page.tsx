"use client";

import Image from "next/image";
import Link from "next/link";

import { useCart } from "@/context/CartContext";
import { formatCurrency } from "@/lib/currency";

const CartPage = () => {
    const {
        cart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
    } = useCart();

    const subtotal = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return (
        <main className="max-w-7xl mx-auto px-6 py-16">

            <h1 className="text-4xl font-bold mb-10">
                Shopping Cart
            </h1>

            {cart.length === 0 ? (

                <div className="text-center py-20">

                    <h2 className="text-2xl font-semibold mb-4">
                        Your cart is empty
                    </h2>

                    <Link
                        href="/products"
                        className="inline-block bg-black text-white px-6 py-3 rounded-lg"
                    >
                        Continue Shopping
                    </Link>

                </div>

            ) : (

                <div className="space-y-8">

                    {cart.map((item) => (

                        <div
                            key={item.id}
                            className="flex gap-6 border rounded-xl p-6 items-center"
                        >

                            <div className="relative w-36 h-36">

                                <Image
                                    src={item.images[0]}
                                    alt={item.name}
                                    fill
                                    className="object-cover rounded-lg"
                                />

                            </div>

                            <div className="flex-1">

                                <h2 className="text-2xl font-bold">
                                    {item.name}
                                </h2>

                                <p className="text-gray-500 mt-1">
                                    {item.category}
                                </p>

                                <p className="mt-3 text-xl font-semibold">
                                    {formatCurrency(item.price)}
                                </p>

                                <div className="flex items-center gap-4 mt-6">

                                    <button
                                        onClick={() => decreaseQuantity(item.id)}
                                        className="w-10 h-10 rounded-lg border text-xl hover:bg-gray-100"
                                    >
                                        −
                                    </button>

                                    <span className="text-lg font-semibold">
                                        {item.quantity}
                                    </span>

                                    <button
                                        onClick={() => increaseQuantity(item.id)}
                                        className="w-10 h-10 rounded-lg border text-xl hover:bg-gray-100"
                                    >
                                        +
                                    </button>

                                </div>

                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    className="mt-6 text-red-600 hover:underline"
                                >
                                    🗑 Remove Item
                                </button>

                            </div>

                            <div className="text-right">

                                <p className="font-bold text-xl">
                                    {formatCurrency(item.price * item.quantity)}
                                </p>

                            </div>

                        </div>

                    ))}

                    <div className="border-t pt-8 flex justify-between items-center">

                        <h2 className="text-2xl font-bold">
                            Subtotal
                        </h2>

                        <p className="text-2xl font-bold">
                            {formatCurrency(subtotal)}
                        </p>

                    </div>

                </div>

            )}

        </main>
    );
};

export default CartPage;