import "animate.css";
import HeroSection from "@/src/components/website/HeroSection";
import Navbar from "@/src/components/website/Navbar";
import WhyChooseUs from "@/src/components/website/WhyChooseUs";
import React from "react";
import Loading from "./loading";
import AboutSection from "@/src/components/website/AboutSection";
import ServicesSection from "@/src/components/website/ServicesSection";
import CountriesSection from "@/src/components/website/CountriesSection";
import TestimonialsSection from "@/src/components/website/TestimonialsSection";
import InstagramShowcase from "@/src/components/InstagramShowcase";
import PartnersShowcase from "@/src/components/website/ourPartnerPage";
import ProcessSection from "@/src/components/website/ProcessSection";
import FaqSection from "@/src/components/website/FaqSection";
import Footer from "@/src/components/website/Footer";
const mainPage = () => {
  return (
    <div>
      <HeroSection />
      <CountriesSection />
      <WhyChooseUs />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <InstagramShowcase />

      <ProcessSection />
      <FaqSection />
      <PartnersShowcase />

      {/* <Loading />  */}
    </div>
  );
};

export default mainPage;
