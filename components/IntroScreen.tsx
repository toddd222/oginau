import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import logo from 'figma:asset/87f4cc8c89eb77fdefa34c48c3c89c26cb5fce8f.png';

interface IntroScreenProps {
  onComplete: () => void;
}

export default function IntroScreen({
  onComplete,
}: IntroScreenProps) {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // 显示logo动画
    const timer1 = setTimeout(() => {
      setShowContent(true);
    }, 500);

    // 3秒后自动进入主页面
    const timer2 = setTimeout(() => {
      onComplete();
    }, 3000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 bg-white flex items-center justify-center cursor-pointer"
      onClick={onComplete}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: showContent ? 1 : 0,
          scale: showContent ? 1 : 0.8,
        }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center space-y-6"
      >
        {/* ロゴ */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: showContent ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-32 h-32 flex items-center justify-center mx-auto"
        >
          <img src={logo} alt="GAO XIANG Logo" className="w-full h-full object-contain" />
        </motion.div>

        {/* ブランド名 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: showContent ? 1 : 0,
            y: showContent ? 0 : 20,
          }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h1 className="text-3xl text-black tracking-wider font-light">
            GAO XIANG
          </h1>
          <p className="text-sm text-black/60 mt-2 tracking-widest">
            写真集
          </p>
        </motion.div>

        {/* 進入ヒント */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: showContent ? 1 : 0 }}
          transition={{ duration: 0.4, delay: 1.5 }}
          className="text-xs text-black/40 tracking-wide"
        >
          クリックして開始
        </motion.p>
      </motion.div>
    </motion.div>
  );
}