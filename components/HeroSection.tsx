import React from "react";
import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { Button } from "./ui/button";

export default function HeroSection() {
  const scrollToGallery = () => {
    const gallerySection = document.getElementById("gallery");
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-white to-muted/20">
      <div className="container mx-auto px-6 text-center space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-wider text-black">
              補って
              <span className="block">生きて</span>
            </h1>
            <div className="w-24 h-px bg-black mx-auto"></div>
            <p className="text-lg md:text-xl text-black/70 max-w-2xl mx-auto leading-relaxed tracking-wide">
              見えないものを、
              <br />
              おぎなう
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-sm text-black/50 tracking-widest"
          >
            2025年夏 コレクション
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
      >
        <Button
          variant="ghost"
          size="icon"
          onClick={scrollToGallery}
          className="animate-bounce text-black/60 hover:text-black"
        >
          <ChevronDown className="w-6 h-6" />
        </Button>
      </motion.div>
    </section>
  );
}