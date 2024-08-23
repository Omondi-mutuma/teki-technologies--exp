import Bento from "@/components/Bento";
import CTA from "@/components/CTA";
import Clients from "@/components/Clients";
import Companies from "@/components/Companies";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center">
      <Navbar />
      <Hero />
      <Companies />
      <Bento />
      <Features />
      <Clients />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}
