import { SignedIn, SignedOut, SignOutButton, SignUpButton } from "@clerk/nextjs";
import Header from "../components/landing/Header";
import Hero from "../components/landing/Hero";
import HowItWork from "../components/landing/HowItWork";
import WhatToAsk from "../components/landing/WhatToAsk";
import PricingSection from "../components/landing/PricingSection";
import CTA from "../components/landing/CTA";
import Footer from "../components/landing/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <HowItWork />
      <WhatToAsk />
      <PricingSection />
      <CTA />
      <Footer/>
    </main>
  );
}
