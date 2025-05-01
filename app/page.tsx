"use client";

import Image from "next/image";
import { Typography } from "@mui/material";
import { useState } from "react";
import { directions } from "./data/directions";
import VideoModal from "./components/VideoModal";

export default function Home() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <div className="min-h-screen p-3 container mx-auto flex flex-col">
      <div className="flex flex-col items-center gap-4 mb-2 w-full mt-3">
        <a
          href="https://www.school6kr.org.ua/public/enrollment"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full max-w-md relative aspect-[3.5/1] transition-transform hover:scale-101"
        >
          <Image
            src="/logo.png"
            alt="Maximum Logo"
            fill
            className="object-contain"
            priority
          />
        </a>
        <Typography variant="h3"  align="center" gutterBottom>
          Запрошуємо на навчання до 10 класу!
        </Typography>
      </div>

      <div className="flex flex-wrap justify-center gap-12 max-w-[1400px] mx-auto">
        {directions.map((direction, index) => (
          <div
            key={index}
            className="card basis-[300px] grow-0 shrink-0"
            onClick={() => setSelectedVideo(direction.video)}
          >
            <div className="card-media h-56">
              <Image
                src={direction.image}
                alt={direction.title}
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className="card-content">
              <Typography variant="h6" fontWeight="bold" className="card-title">
                {direction.title}
              </Typography>
            </div>
          </div>
        ))}
      </div>

      {/* <div className="mt-12 text-center">
        <a
          href="https://www.school6kr.org.ua/public/enrollment"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-200 underline underline-offset-4 transition-colors"
        >
          Детальніше про вступ до ліцею →
        </a>
      </div> */}

      <VideoModal
        open={!!selectedVideo}
        onClose={() => setSelectedVideo(null)}
        videoUrl={selectedVideo || ""}
      />
    </div>
  );
}
