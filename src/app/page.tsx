import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import ValueProps from "@/components/value-props";
import HowItWorks from "@/components/how-it-works";
import DemoBlock from "@/components/demo-block";
import Metrics from "@/components/metrics";
import Testimonials from "@/components/testimonials";
import Security from "@/components/security";
import Integrations from "@/components/integrations";
import FinalCTA from "@/components/final-cta";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <ValueProps />
        <HowItWorks />
        <DemoBlock />
        <Metrics />
        <Testimonials />
        <Security />
        <Integrations />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
