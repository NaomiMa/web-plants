import React, { useState } from "react";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";

import Navbar from "../components/Navbar";
import Plants from "../components/Plants";
import QuestionsCard from "../components/Questions";
import Sidebar from "../components/Sidebar";
import StickyFooter from "../components/StikyFooter";
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
    };
    
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <QuestionsCard />
      <Plants />
      <StickyFooter />
      <Footer />
    </>
  );
};

export default Home;
