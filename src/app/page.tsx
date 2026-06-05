import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
// import StatsBanner from "@/components/StatsBanner";
import TrustedBy from "@/components/TrustedBy";
import Ecosystem from "@/components/Ecosystem";
import Services from "@/components/Services";
import Products from "@/components/Products";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import CTASection from "@/components/CTASection";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ScrollProgress from "@/components/ScrollProgress";
import MouseGlow from "@/components/MouseGlow";
import FloatingDashboard from "@/components/FloatingDashboard";
import Spotlight from "@/components/Spotlight";
import HeroV2 from "@/components/HeroV2";
export default function HomePage() {
return ( <main> <ScrollProgress />
<MouseGlow />

  <ScrollProgress />

  <Navbar />

       <HeroV2 />

  {/* <StatsBanner /> */}

  <TrustedBy />

  <Ecosystem />

  <Services />

  <Products />

  <WhyChooseUs />

  <Portfolio />

  <Testimonials />

  <Faq />

  <CTASection />

  <ContactCTA />

  <Footer />
  <FloatingDashboard />
  <Spotlight />
<MouseGlow />

  <FloatingWhatsApp />
</main>

);
}
