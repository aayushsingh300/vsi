"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Courses from "@/components/Courses";
import Labs from "@/components/Labs";
import Awards from "@/components/Awards";
import Testimonials from "@/components/Testimonials";
import EmployerTicker from "@/components/EmployerTicker";
import HomeWorkAbroad from "@/components/HomeWorkAbroad";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import FloatingWA from "@/components/FloatingWA";
import MagneticCursor from "@/components/MagneticCursor";

export default function Home() {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <MagneticCursor />
      <Navbar formOpen={formOpen} setFormOpen={setFormOpen} />
      <Hero />
      <Stats />
      <Courses />
      <EmployerTicker />
      <Labs />
      <Awards />
      <Testimonials />
      <HomeWorkAbroad />
      <CTA />
      <Footer />
      <FloatingWA />
    </div>
  );
}
