import React, { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "motion/react";
import {
  ChevronLeft,
  ChevronRight,
  X,
  ArrowLeft,
} from "lucide-react";
import { Theme } from "./ThemeSelection";

interface Photo {
  id: number;
  src: string;
  title: string;
  description: string;
  themeId: string;
}

const allPhotos: Photo[] = [
  // 日常の光 (Daily Light)
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1584541984229-f5150426225e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3JuaW5nJTIwbGlnaHQlMjB3aW5kb3clMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTU2OTMxMzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "朝の光",
    description: "静かな朝に差し込む自然光の美しさ",
    themeId: "daily-light",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1691577182394-f1e6fab5e541?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwcG9ydHJhaXQlMjBuYXR1cmFsJTIwbGlnaHR8ZW58MXx8fHwxNzU1NjkxNjkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "自然な表情",
    description: "何気ない日常の中で捉えた純粋な瞬間",
    themeId: "daily-light",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1639820525335-698a7dc604df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHBob3RvZ3JhcGh5JTIwd29tYW58ZW58MXx8fHwxNzU1NjAxMzk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "優雅な瞬間",
    description: "日常に潜む美しい一瞬を捉えて",
    themeId: "daily-light",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHNvZnQlMjBsaWdodHxlbnwxfHx8fDE3NTU2OTE2OTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "柔らかな午後",
    description: "午後の優しい光に包まれた穏やかな時間",
    themeId: "daily-light",
  },

  // 街角の詩 (Urban Poetry)
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1680511510667-815bb9a5c167?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwcG9ydHJhaXQlMjBzdHVkaW98ZW58MXx8fHwxNzU1NjkxNjkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "都市の美学",
    description: "現代的な建築と調和する洗練されたスタイル",
    themeId: "urban-poetry",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1714730291857-e982efc61cd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlZXQlMjBwaG90b2dyYXBoeSUyMHVyYmFuJTIwbGlmZXN0eWxlfGVufDF8fHx8MTc1NTY5MzEyM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "街角のリズム",
    description: "都市生活の中に息づく詩的な瞬間",
    themeId: "urban-poetry",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdHxlbnwxfHx8fDE3NTU2NjY4MTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "プロフェッショナル",
    description: "ビジネス街での洗練されたポートレート",
    themeId: "urban-poetry",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1580508174046-170816f65662?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzU1NjkxNjkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "モダンエレガンス",
    description: "時代性と普遍性が融合したファッション",
    themeId: "urban-poetry",
  },

  // 季節の記憶 (Seasonal Memories)
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1665021371104-cb7344322f32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc3RpYyUyMHBvcnRyYWl0JTIwYmxhY2slMjB3aGl0ZXxlbnwxfHx8fDE3NTU2OTE2OTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "モノクロームの季節",
    description: "白と黒で表現する季節の移ろい",
    themeId: "seasonal-memories",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1709247505449-2621814603e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGFydGlzdGljJTIwcG9ydHJhaXQlMjBwaG90b2dyYXBoeXxlbnwxfHx8fDE3NTU2OTMxMzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "創造的な瞬間",
    description: "自然のリズムと芸術的感性の調和",
    themeId: "seasonal-memories",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1711191751444-6a42c74a9c20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWFzb25hbCUyMG5hdHVyZSUyMHBvcnRyYWl0JTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzU1NjkzMTI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "季節の記憶",
    description: "時の流れと共に変化する自然の美しさ",
    themeId: "seasonal-memories",
  },
];

interface PhotoGalleryProps {
  selectedTheme: Theme;
  onBackToThemes: () => void;
}

export default function PhotoGallery({
  selectedTheme,
  onBackToThemes,
}: PhotoGalleryProps) {
  const [selectedPhoto, setSelectedPhoto] =
    useState<Photo | null>(null);

  const photos = allPhotos.filter(
    (photo) => photo.themeId === selectedTheme.id,
  );
  const currentPhotoIndex = selectedPhoto
    ? photos.findIndex((p) => p.id === selectedPhoto.id)
    : -1;

  const navigatePhoto = (direction: "prev" | "next") => {
    if (currentPhotoIndex === -1) return;

    let newIndex;
    if (direction === "prev") {
      newIndex =
        currentPhotoIndex > 0
          ? currentPhotoIndex - 1
          : photos.length - 1;
    } else {
      newIndex =
        currentPhotoIndex < photos.length - 1
          ? currentPhotoIndex + 1
          : 0;
    }

    setSelectedPhoto(photos[newIndex]);
  };

  return (
    <div className="space-y-12">
      {/* テーマヘッダー */}
      <div className="flex items-center justify-between">
        <Button
          variant="ghost"
          onClick={onBackToThemes}
          className="flex items-center space-x-2 text-muted-foreground hover:text-black transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="tracking-wide">一覧に戻る</span>
        </Button>
      </div>

      <div className="text-center space-y-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-light tracking-wider text-black"
        >
          {selectedTheme.title}
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-16 h-px bg-black mx-auto"
        />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-muted-foreground max-w-lg mx-auto tracking-wide leading-relaxed"
        >
          {selectedTheme.description}
        </motion.p>
      </div>

      {/* 写真グリッド */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <AnimatePresence>
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="cursor-pointer group"
              onClick={() => setSelectedPhoto(photo)}
            >
              <div className="aspect-[3/4] relative overflow-hidden rounded-lg bg-muted">
                <ImageWithFallback
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-white font-light tracking-wide">
                    {photo.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* 写真詳細ダイアログ */}
      <Dialog
        open={!!selectedPhoto}
        onOpenChange={() => setSelectedPhoto(null)}
      >
        <DialogContent className="max-w-6xl max-h-[95vh] p-0 bg-black/95 border-none">
          <DialogTitle className="sr-only">
            {selectedPhoto?.title}
          </DialogTitle>
          {selectedPhoto && (
            <div className="relative">
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 text-white border-none"
                onClick={() => setSelectedPhoto(null)}
              >
                <X className="w-5 h-5" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 text-white border-none"
                onClick={() => navigatePhoto("prev")}
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 text-white border-none"
                onClick={() => navigatePhoto("next")}
              >
                <ChevronRight className="w-6 h-6" />
              </Button>

              <div className="flex items-center justify-center min-h-[80vh]">
                <ImageWithFallback
                  src={selectedPhoto.src}
                  alt={selectedPhoto.title}
                  className="max-w-full max-h-[80vh] object-contain"
                />
              </div>

              <div className="p-8 text-center space-y-2 bg-gradient-to-t from-black/80 to-transparent">
                <h2 className="text-white text-xl font-light tracking-wide">
                  {selectedPhoto.title}
                </h2>
                <p className="text-white/70 text-sm tracking-wide">
                  {selectedPhoto.description}
                </p>
                <p className="text-white/50 text-xs tracking-widest">
                  {currentPhotoIndex + 1} / {photos.length}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}