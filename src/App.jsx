import Payout from "./pages/Payout/Payout";

import VeloopNavbar from "./components/VeloopNavbar";
import VeloopHero from "./components/VeloopHero";
import WaysToEarn from "./components/WaysToEarn";
import RewardJourney from "./components/RewardJourney";
import WhyVeloop from "./components/WhyVeloop";
import VeloopTestimonials from "./components/VeloopTestimonials";
import VeloopFAQ from "./components/VeloopFAQ";
import VeloopCTA from "./components/VeloopCTA";
// import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#161827] text-white scroll-smooth">
      {/* Navbar */}
      <VeloopNavbar />

      {/* Hero */}
      <VeloopHero />

      {/* Ways to Earn */}
      <WaysToEarn />

      {/* How It Works */}
      <RewardJourney />

      {/* Why Veloop */}
      <WhyVeloop />

      {/* ========================= */}
      {/* WORKING PAYOUT PAGE       */}
      {/* ========================= */}
      <Payout />

      {/* Testimonials */}
      <VeloopTestimonials />

      {/* FAQ */}
      <VeloopFAQ />

      {/* Final CTA */}
      <VeloopCTA />

      {/* Footer */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
