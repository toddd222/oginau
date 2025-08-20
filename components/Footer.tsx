import React from "react";
import { Separator } from "./ui/separator";
import logo from "figma:asset/87f4cc8c89eb77fdefa34c48c3c89c26cb5fce8f.png";

export default function Footer() {
  return (
    <footer className="bg-muted/10 mt-24">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center space-y-8">
          {/* ブランド情報 */}
          <div className="flex items-center justify-center space-x-4">
            <div className="w-8 h-8 flex items-center justify-center">
              <img
                src={logo}
                alt="GAO XIANG Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="font-light tracking-wider text-lg"></span>
          </div>

          <div className="max-w-md mx-auto space-y-4">
            <p className="text-muted-foreground leading-relaxed tracking-wide text-sm">
              <br />
            </p>

            <div className="text-xs text-muted-foreground/70 tracking-widest">
              <p>撮影: 2025年8月</p>
              <p>場所: 東京</p>
            </div>
          </div>
        </div>

        <Separator className="my-12" />

        <div className="text-center space-y-4">
          <p className="text-muted-foreground text-xs tracking-widest">
            © 2025 GAO XIANG PHOTO COLLECTION
          </p>
          <p className="text-muted-foreground/60 text-xs tracking-wide">
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}