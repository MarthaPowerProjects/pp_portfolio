"use client";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="w-screen min-h-screen flex flex-col bg-primary">
      <Navbar />
      <section id="home" className="h-screen flex items-center justify-center">
        <Hero />
      </section>
      <section
        id="about"
        className="h-screen flex items-center justify-center text-6xl bg-white text-black"
      >
        About Us
      </section>
      <section
        id="services"
        className="h-screen flex items-center justify-center text-6xl bg-primary text-white"
      >
        Services
      </section>
      <section
        id="products"
        className="h-screen flex items-center justify-center text-6xl bg-white text-black"
      >
        Products
      </section>
      <section
        id="contact"
        className="h-screen flex items-center justify-center text-6xl bg-primary text-white"
      >
        Contact Us
      </section>
    </div>
  );
}
