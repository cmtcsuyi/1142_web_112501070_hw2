"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { usePsyStore } from "@/store/store";

type ResultType = {
  type: string;
  title: string;
  desc: string;
  quote: string;
};

type FullResultType = ResultType & {
  max: number;
  img: string;
};

const RESULT_MAP: (ResultType & { max: number, img: string})[] = [
  {
    max: 5,
    type: "cirrus",
    title: "卷雲（Cirrus）",
    desc: "你像高空的卷雲，輕盈而清晰。\n你傾向先理解再行動，在變化中保持距離與洞察。",
    quote: "✨ You see before you move.",
    img: "/cirrus.jpg",
  },
  {
    max: 7,
    type: "cumulus",
    title: "積雲（Cumulus）",
    desc: "你在變動中成形。\n你不需要固定方向，因為你會在流動中找到答案。",
    quote: "✨ You move, therefore you become.",
    img: "/cumulus.avif",
  },
  {
    max: 9,
    type: "cumulonimbus",
    title: "積雨雲（Cumulonimbus）",
    desc: "你蘊含能量，並在某些時刻轉化為改變。\n你不總是顯現，但當條件成熟，你會帶來轉折。",
    quote: "✨ You transform when it matters.",
    img: "/Cumulonimbus.webp",
  },
  {
    max: 12,
    type: "stratus",
    title: "層雲（Stratus）",
    desc: "你維持整體的穩定與連續。\n你不追逐劇烈變化，而是讓一切在適當的節奏中存在。",
    quote: "✨ You hold the sky together.",
    img: "/Stratus.jpg",
  },
];

export default function Result() {
  const router = useRouter();
  const psyData = usePsyStore((state) => state.psyData);
  const setPsyScore = usePsyStore((state) => state.setScore);

  const [result, setResult] = useState<FullResultType | null>(null);

  useEffect(() => {
    const found =
      RESULT_MAP.find((item) => psyData.score <= item.max) ||
      RESULT_MAP[RESULT_MAP.length - 1];

    setResult(found);
  }, [psyData.score]);

  function playAgain() {
    setPsyScore(0);
    router.push("/");
  }

  if (!result) return null;
  return (
    <div className="flex flex-col items-center justify-center text-center gap-6 min-h-[60vh] px-4">
  
      {/* 類型標籤 */}
      <div className="text-sm tracking-widest text-gray-400">
        YOUR CLOUD TYPE
      </div>
  
      {/* 標題 */}
      <h1 className="text-2xl font-semibold text-[#2f3a36]">
        {result.title}
      </h1>
      
      <img src={result.img} alt={result.type} className="w-40 h-auto mb-2 object-contain"/>
  
      {/* 分隔線 */}
      <div className="w-10 h-[2px] bg-gradient-to-r from-[#9bbcff] to-[#8b8cf5] rounded-full" />
  
      {/* 描述 */}
      <p className="whitespace-pre-line leading-relaxed text-gray-700 max-w-md">
        {result.desc}
      </p>
  
      {/* quote（強化） */}
      <p className="text-sm text-[#8b8cf5] tracking-wide italic">
        {result.quote}
      </p>
  
      {/* 按鈕 */}
      <button
        onClick={playAgain}
        className="
          mt-8
          bg-[#2f3a36]
          text-white
          px-8 py-3
          rounded-xl
          text-[14px]
          tracking-widest
          transition-all duration-300
          hover:-translate-y-1
          active:translate-y-0 active:scale-95
        "
      >
        再來一次
      </button>
  
    </div>
  );
}