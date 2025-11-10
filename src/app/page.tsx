import { SignedIn, SignedOut, SignOutButton, SignUpButton } from "@clerk/nextjs";
import Header from "../components/landing/Header";
import Hero from "../components/landing/Hero";
import HowItWork from "../components/landing/HowItWork";
import WhatToAsk from "../components/landing/WhatToAsk";
import PricingSection from "../components/landing/PricingSection";
import CTA from "../components/landing/CTA";
import Footer from "../components/landing/Footer";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Home() {
  const user = await currentUser();

  //redirect auth user to dasboard
  if(user) redirect("/dashboard")

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <HowItWork />
      <WhatToAsk />
      <PricingSection />
      <CTA />
      <Footer />
    </main>
  );
}
