export default function Home() {
  return (
    <>
      <h1 className="text-[32px] leading-[1.4] text-[#2f3a36] font-medium mb-10">
        你的內在，<br />
        屬於哪一種雲？
      </h1>

      <p className="text-[16px] leading-8 text-[#3f4a46] mb-8">
        天空從來不是單一狀態。<br />
        有時輕盈，有時堆積，有時低沉，<br />
        有時劇烈翻湧。<br />
        你也是。
      </p>

      <p className="text-[16px] leading-8 text-[#3f4a46] mb-8">
        在不同的情境之中，<br />
        你如何移動、改變或停留，<br />
        其實早已形成一種屬於你的節奏。
      </p>

      <p className="text-[16px] leading-8 text-[#3f4a46] mb-8">
        這個測驗，將描繪你的內在形態。
      </p>

      <div className="flex justify-center">
        <a
          href="/question"
          className="bg-[#2f3a36] text-white px-8 py-3 rounded-xl text-[14px] tracking-widest hover:scale-105 transition"
        >
          開始測驗
        </a>
      </div>
    </>
  );
}