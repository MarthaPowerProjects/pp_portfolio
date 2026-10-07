import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Services from "./components/Services";
import Steps from "./components/Steps";
import TwoPaths from "./components/TwoPaths";
import Work from "./components/Work";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TwoPaths />
        <Services />
        <Work />
        <Pricing />
        <Steps />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
