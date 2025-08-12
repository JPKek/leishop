'use client';

import Navbar from "./components/navbar";
import HeroSection from "./components/heroSection";
import ProductsFeatures from "./components/productsFeatures";
import ProductSection from "./components/productSection";
import CtaSection from "./components/ctaSection";
import Footer from "./components/footer";

export default function Home() {
  return (
   <div>
  <Navbar/>
  <HeroSection/>
  <ProductsFeatures/>
  <ProductSection />
  <CtaSection/>
  <Footer/>
   </div>
  );
}
