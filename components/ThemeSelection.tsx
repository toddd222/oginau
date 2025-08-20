import React from "react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export interface Theme {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  coverImage: string;
  photoCount: number;
}

const themes: Theme[] = [
  {
    id: "daily-light",
    title: "「見る」と「見えない」の間",
    subtitle: "Daily Light",
    description:
      "何気ない日常に潜む美しい瞬間を捉えた写真集。朝の光、街角の風景、人々の自然な表情。",
    coverImage:
      "https://images.unsplash.com/photo-1639820525335-698a7dc604df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHBob3RvZ3JhcGh5JTIwd29tYW58ZW58MXx8fHwxNzU1NjAxMzk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    photoCount: 8,
  },
  {
    id: "urban-poetry",
    title: "見えない構造、見せる表示",
    subtitle: "Urban Poetry",
    description:
      "都市の建築と人々が織りなす現代的な美学。モダンな空間での洗練されたポートレート。",
    coverImage:
      "https://images.unsplash.com/photo-1680511510667-815bb9a5c167?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwcG9ydHJhaXQlMjBzdHVkaW98ZW58MXx8fHwxNzU1NjkxNjkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    photoCount: 6,
  },
  {
    id: "seasonal-memories",
    title: "こころの隙間に灯す",
    subtitle: "Seasonal Memories",
    description:
      "四季それぞれの表情と、時間の流れの中で変化する自然の美しさを表現した作品集。",
    coverImage:
      "https://images.unsplash.com/photo-1665021371104-cb7344322f32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc3RpYyUyMHBvcnRyYWl0JTIwYmxhY2slMjB3aGl0ZXxlbnwxfHx8fDE3NTU2OTE2OTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    photoCount: 7,
  },
];

interface ThemeSelectionProps {
  onThemeSelect: (theme: Theme) => void;
}

export default function ThemeSelection({
  onThemeSelect,
}: ThemeSelectionProps) {
  return (
    <div className="space-y-16">
      {/* セクションヘッダー */}
      <div className="text-center space-y-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-light tracking-wider text-black"
        >
          写真集コレクション
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-20 h-px bg-black mx-auto"
        />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-muted-foreground max-w-2xl mx-auto tracking-wide leading-relaxed"
        >
          三つ章で構成された写真集をご覧ください。
          <br />
          それぞれの物語を持っています。
        </motion.p>
      </div>

      {/* テーマグリッド */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {themes.map((theme, index) => (
          <motion.div
            key={theme.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.6 + index * 0.2,
            }}
            whileHover={{
              y: -8,
              transition: { duration: 0.3 },
            }}
            className="group cursor-pointer"
            onClick={() => onThemeSelect(theme)}
          >
            <div className="space-y-6">
              {/* カバー画像 */}
              <div className="aspect-[4/5] relative overflow-hidden rounded-lg bg-muted">
                <ImageWithFallback
                  src={theme.coverImage}
                  alt={theme.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-6 left-6 right-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 space-y-2">
                  <p className="text-sm tracking-wide">
                    {theme.photoCount}枚の写真
                  </p>
                  <motion.div
                    className="w-8 h-px bg-white"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>

              {/* テーマ情報 */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-light tracking-wider text-black group-hover:text-black/80 transition-colors">
                    {theme.title}
                  </h3>
                  <p className="text-xs text-muted-foreground tracking-widest uppercase">
                    {theme.subtitle}
                  </p>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed tracking-wide">
                  {theme.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export { themes };