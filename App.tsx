import React, { useState } from "react";
import { AnimatePresence } from "motion/react";
import IntroScreen from "./components/IntroScreen";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import PhotoGallery from "./components/PhotoGallery";
import ThemeSelection, { Theme } from "./components/ThemeSelection";
import Footer from "./components/Footer";

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [selectedTheme, setSelectedTheme] = useState<Theme | null>(null);

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  const handleThemeSelect = (theme: Theme) => {
    setSelectedTheme(theme);
  };

  const handleBackToThemes = () => {
    setSelectedTheme(null);
  };

  return (
    <div className="min-h-screen bg-white">
      <AnimatePresence mode="wait">
        {showIntro ? (
          <IntroScreen
            key="intro"
            onComplete={handleIntroComplete}
          />
        ) : (
          <div key="main">
            <Header />
            <main>
              <HeroSection />
              <section
                id="gallery"
                className="container mx-auto px-6 py-24"
              >
                {selectedTheme ? (
                  <PhotoGallery 
                    selectedTheme={selectedTheme}
                    onBackToThemes={handleBackToThemes}
                  />
                ) : (
                  <ThemeSelection onThemeSelect={handleThemeSelect} />
                )}
              </section>
            </main>
            <Footer />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}