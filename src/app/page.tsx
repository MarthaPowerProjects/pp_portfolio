import Contact from "./components/Contact";
import Engage from "./components/Engage";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Process from "./components/Process";
import Services from "./components/Services";
import StickyCta from "./components/StickyCta";
import Work from "./components/Work";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <Work />
        <Engage />
        <Contact />
      </main>
      <Footer />
      <StickyCta />
    </>
  );
}
