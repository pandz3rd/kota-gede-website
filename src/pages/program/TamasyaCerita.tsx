import Navbar from "../../components/program/tamasya/Navbar";
import HeroSection from "../../components/program/tamasya/HeroSection";
import GlimpseSection from "../../components/program/tamasya/GlimpseSection";
import StorySection from "../../components/program/tamasya/StorySection";
import QuoteSection from "../../components/program/tamasya/QuoteSection";
import SeriesSection from "../../components/program/tamasya/SeriesSection";
import ItenarySection from "../../components/program/tamasya/ItenarySection";
import WhatYouGetSection from "../../components/program/tamasya/WhatYouGetSection";
import OurStoriesSection from "../../components/program/tamasya/OurStoriesSection";
import ContactSection from "../../components/program/tamasya/ContactSection";
import Footer from "../../components/program/tamasya/Footer";


const TamasyaCerita = () => {
    return (
        <div className="min-h-screen font-serif">
            <Navbar />
            <HeroSection />
            <GlimpseSection />
            <StorySection />
            <QuoteSection />
            <SeriesSection />
            <ItenarySection />
            <WhatYouGetSection />
            <OurStoriesSection />
            <ContactSection />
            <Footer />
        </div>
    );
};

export default TamasyaCerita;
