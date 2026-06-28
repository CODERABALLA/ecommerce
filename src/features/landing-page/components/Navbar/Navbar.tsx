import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center px-8 py-4 shadow-md">
            <Link href="/" className="text-xl font-bold">
                MyShop
            </Link>
            <ul className="flex gap-6">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/products">Products</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/why-us">Why Us</Link></li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;