const Navbar = () => {
    return (
        <nav className="flex justify-between items-center px-8 py-4 shadow-md">
            <div className="text-xl font-bold">MyShop</div>
            <ul className="flex gap-6">
                <li><a href="#home">Home</a></li>
                <li><a href="#why-us">Why Us</a></li>
                <li><a href="#products">Products</a></li>
                <li><a href="#contact">Contact Us</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;