"use client"

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Prepare() {

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 2000); // 2秒後切換

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center text-center gap-6 min-h-[60vh]">

      {/* 文字 */}
      <div className="text-[#2f3a36] text-lg tracking-wide mb-10">
        雲朵正在準備出場...
      </div>

      {/* 點點（漸層 + shadow + 淡出縮小） */}
      <div
        className={`
          flex gap-3 transition-all duration-500
          ${showButton ? "opacity-0 scale-75" : "opacity-100 scale-100"}
        `}
      >
        <span className="w-3 h-3 rounded-full bg-gradient-to-br from-[#9bbcff] to-[#8b8cf5] shadow-[0_0_10px_rgba(139,140,245,0.8)] animate-[bounce_0.6s_infinite] [animation-delay:-0.3s]" />
        <span className="w-3 h-3 rounded-full bg-gradient-to-br from-[#9bbcff] to-[#8b8cf5] shadow-[0_0_10px_rgba(139,140,245,0.8)] animate-[bounce_0.6s_infinite] [animation-delay:-0.15s]" />
        <span className="w-3 h-3 rounded-full bg-gradient-to-br from-[#9bbcff] to-[#8b8cf5] shadow-[0_0_10px_rgba(139,140,245,0.8)] animate-[bounce_0.6s_infinite]" />
      </div>

      {/* 按鈕（延遲出現 + 浮上來） */}
      <Link
        href="/result"
        className={`
          mt-6 bg-[#2f3a36] text-white px-8 py-3 rounded-xl text-[14px] tracking-widest 
          transition-all 
          hover:scale-105
          ${showButton ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
        `}
      >
        看結果
      </Link>

    </div>
  );
}