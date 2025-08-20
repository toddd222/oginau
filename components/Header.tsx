import React from "react";
import { Button } from "./ui/button";
import { Instagram, Mail } from "lucide-react";
import logo from 'figma:asset/87f4cc8c89eb77fdefa34c48c3c89c26cb5fce8f.png';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 border-b border-border">
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          {/* ロゴエリア */}
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 flex items-center justify-center">
              <img src={logo} alt="GAO XIANG Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <h1 className="text-lg font-light tracking-wider text-black">
                GAO XIANG
              </h1>
              <p className="text-xs text-black/60 tracking-widest">
                写真集
              </p>
            </div>
          </div>

          {/* コンタクト */}
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              className="text-black/60 hover:text-black"
            >
              <Instagram className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-black/60 hover:text-black"
            >
              <Mail className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}