import Details from "./components/Details";
import Footer from "./components/Footer";
import GoogleBento from "./components/GoogleBento";
import HeroSection from "./components/HeroSection";
import LandingPageNavSection from "./components/LandingPageNavSection";
import MarqueeSection from "./components/MarqueeSection";
import MidSectionBentoLayout from "./components/MidSectionBentoLayout";

function LandingPage() {
  return (
    <>
      {/* upper part */}
      <LandingPageNavSection />
      <HeroSection />

      {/* mid part */}
      <div className="wrapper flex flex-col items-center justify-center">
        <MarqueeSection />
        <MidSectionBentoLayout />
        <Details />
        <GoogleBento />
      </div>

      {/* bottom part */}
      <Footer />
    </>
  );
}

export default LandingPage;
