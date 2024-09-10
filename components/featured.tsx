"use client";

import { useEffect, useRef } from "react";

type FeatureItem = {
  id: number;
  title: string;
  author: string;
};

const featuredItems: FeatureItem[] = [
  { id: 1, title: "Top 10 Startups", author: "Zartek" },
  {
    id: 2,
    title: "Software Startups Shaping India's Tech Industry",
    author: "Startup Bubble",
  },
  {
    id: 3,
    title: "Kerela Startups in India tech world",
    author: "Bubble News",
  },
  { id: 4, title: "Startup Story", author: "Tech News" },
  { id: 5, title: "For", author: "Zartek" },
  { id: 6, title: "For", author: "Zartek" },
  { id: 7, title: "For", author: "Zartek" },
  { id: 8, title: "For", author: "Zartek" },
];

export default function MovingImageStrip() {
  const stripRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stripElement = stripRef.current;
    if (!stripElement) return;

    let animationFrameId: number;
    let position = 0;

    const animate = () => {
      position -= 1;
      if (position <= -stripElement.scrollWidth / 2) {
        position = 0;
      }
      stripElement.style.transform = `translateX(${position}px)`;
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="w-full overflow-hidden bg-white py-8">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Featured
      </h2>
      <div className="relative">
        <div
          ref={stripRef}
          className="flex whitespace-nowrap"
          aria-label="Scrolling featured destinations"
          style={{ width: `${featuredItems.length * 350}px` }}
        >
          {featuredItems.map((item) => (
            <div
              key={item.id}
              className="inline-flex items-center justify-center mx-2 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden"
              style={{ width: "400px", height: "210px" }}
            >
              <div className="flex flex-col items-center justify-center p-4 h-full">
                <p className="text-center text-3xl font-bold mb-1 whitespace-normal">
                  {item.title}
                </p>
                <p className="text-center text-xs text-gray-500 whitespace-normal">
                  {item.author}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
