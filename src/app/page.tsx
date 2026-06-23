import Navbar from "@/features/landing-page/components/Navbar/Navbar";
import Hero from "@/features/landing-page/components/Hero/Hero";
import About from "@/features/landing-page/components/About/About";
import Products from "@/features/landing-page/components/Products/Products";
import Contact from "@/features/landing-page/components/Contact/Contact";
import Footer from "@/features/landing-page/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Contact />
      <Footer />
    </>
  );
}