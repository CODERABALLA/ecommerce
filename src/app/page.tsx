import Navbar from "@/features/landing-page/components/Navbar/Navbar";
import Hero from "@/features/landing-page/components/Hero/Hero";
import FeaturedProducts from "@/features/landing-page/components/Products/Products";
import Footer from "@/features/landing-page/components/Footer/Footer";
import Categories from "@/features/landing-page/components/Categories/Categories";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <FeaturedProducts />
      <Footer />
    </>
  );
}