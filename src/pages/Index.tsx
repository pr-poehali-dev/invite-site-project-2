import { useState } from "react";

const BG_COUPLE = "https://cdn.poehali.dev/projects/fc69c122-ca1e-48f2-a04e-677a5b3ed5fa/bucket/c077ee5e-7c57-4cae-b3cd-f7f368fbb9e8.png";
const BG_PATTERN = "https://cdn.poehali.dev/projects/fc69c122-ca1e-48f2-a04e-677a5b3ed5fa/bucket/c832a4b3-f139-4181-a6ac-127733a0a437.png";

const Divider = () => (
  <div className="flex items-center justify-center gap-2 my-4">
    <div className="h-px w-12" style={{ background: "linear-gradient(90deg, transparent, #a07840)" }} />
    <span style={{ color: "#a07840", fontSize: "0.7rem" }}>✦</span>
    <div className="h-px w-12" style={{ background: "linear-gradient(90deg, #a07840, transparent)" }} />
  </div>
);

export default function Index() {
  const [opened, setOpened] = useState(false);

  return (
    <div
      className="w-full font-cormorant"
      style={{
        maxWidth: 480,
        margin: "0 auto",
        height: "100dvh",
        overflowY: opened ? "scroll" : "hidden",
        scrollSnapType: "y mandatory",
        scrollBehavior: "smooth",
      }}
    >

      {/* ── СЛАЙД 1: Айттыру ── */}
      <div
        className="relative flex flex-col items-center justify-center"
        style={{
          height: "100dvh",
          scrollSnapAlign: "start",
          backgroundImage: `url('${BG_PATTERN}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1
          className="font-cormorant-sc font-light text-center"
          style={{
            fontSize: "clamp(4.5rem, 22vw, 8rem)",
            color: "#4a2e10",
            letterSpacing: "0.08em",
            lineHeight: 1,
          }}
        >
          Айттыру
        </h1>

        <button
          onClick={() => setOpened(true)}
          className="absolute bottom-12 flex flex-col items-center gap-2"
          style={{ background: "none", border: "none", cursor: "pointer", left: "50%", transform: "translateX(-50%)" }}
        >
          <span className="font-cormorant tracking-[0.2em] text-xs uppercase" style={{ color: "#8a6530" }}>открыть</span>
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center"
            style={{ border: "1px solid rgba(160,120,64,0.45)", background: "rgba(245,239,227,0.35)" }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 2v10M2 8l5 5 5-5" stroke="#8a6530" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </button>
      </div>

      {/* ── СЛАЙД 2: Имена ── */}
      <div
        className="relative flex flex-col items-center justify-center text-center px-10"
        style={{
          height: "100dvh",
          scrollSnapAlign: "start",
          backgroundImage: `url('${BG_PATTERN}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0" style={{ background: "rgba(245,239,227,0.55)" }} />
        <div className="relative z-10 flex flex-col items-center">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12" style={{ background: "#8a6530" }} />
            <span style={{ color: "#8a6530", fontSize: "0.7rem" }}>✦</span>
            <div className="h-px w-12" style={{ background: "#8a6530" }} />
          </div>
          <h2
            className="font-cormorant italic font-light"
            style={{ fontSize: "clamp(3rem, 15vw, 5rem)", color: "#2e1a08", lineHeight: 1.05 }}
          >
            Аэлита
          </h2>
          <div className="flex items-center gap-4 my-3">
            <div className="h-px w-10" style={{ background: "rgba(160,120,64,0.4)" }} />
            <span className="font-cormorant font-light" style={{ fontSize: "2.5rem", color: "#a07840" }}>&</span>
            <div className="h-px w-10" style={{ background: "rgba(160,120,64,0.4)" }} />
          </div>
          <h2
            className="font-cormorant italic font-light"
            style={{ fontSize: "clamp(3rem, 15vw, 5rem)", color: "#2e1a08", lineHeight: 1.05 }}
          >
            Тузагаш
          </h2>
          <div className="flex items-center gap-3 mt-6">
            <div className="h-px w-12" style={{ background: "#8a6530" }} />
            <span style={{ color: "#8a6530", fontSize: "0.7rem" }}>✦</span>
            <div className="h-px w-12" style={{ background: "#8a6530" }} />
          </div>
        </div>
      </div>

      {/* ── СЛАЙД 3: Стихи ── */}
      <div
        className="relative flex flex-col items-center justify-center text-center px-10"
        style={{
          height: "100dvh",
          scrollSnapAlign: "start",
          backgroundImage: `url('${BG_PATTERN}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0" style={{ background: "rgba(245,239,227,0.58)" }} />
        <div className="relative z-10 flex flex-col items-center">
          <p className="font-cormorant text-xl font-light leading-[2]" style={{ color: "#3a2210" }}>
            Јайдыҥ јараш кӱӱнинде,<br />
            Јаҥы кӱйген очокко,<br />
            Јаҥарлап кожоҥ јайыгар,<br />
            Јараш алкыштар айдыгар.
          </p>
          <Divider />
          <p className="font-cormorant text-lg font-light leading-[2] italic" style={{ color: "#5a3820" }}>
            Бистиҥ кудабыска<br />
            акту јӱрегистеҥ<br />
            кычырып турубыс.
          </p>
        </div>
      </div>

      {/* ── СЛАЙД 4: Дата, время, место ── */}
      <div
        className="relative flex flex-col items-center justify-center text-center px-10"
        style={{
          height: "100dvh",
          scrollSnapAlign: "start",
          backgroundImage: `url('${BG_PATTERN}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0" style={{ background: "rgba(245,239,227,0.55)" }} />
        <div className="relative z-10 flex flex-col items-center gap-2">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12" style={{ background: "#8a6530" }} />
            <span style={{ color: "#8a6530", fontSize: "0.7rem" }}>✦</span>
            <div className="h-px w-12" style={{ background: "#8a6530" }} />
          </div>

          <p
            className="font-cormorant-sc font-light tracking-[0.1em]"
            style={{ fontSize: "clamp(2rem, 10vw, 3rem)", color: "#4a2e10" }}
          >
            14.08.2026
          </p>

          <div className="h-px w-16 my-2" style={{ background: "linear-gradient(90deg, transparent, #a07840, transparent)" }} />

          <p className="font-cormorant font-light" style={{ fontSize: "clamp(1.6rem, 8vw, 2.4rem)", color: "#3a2210" }}>
            Саат 16:00
          </p>

          <div className="h-px w-16 my-2" style={{ background: "linear-gradient(90deg, transparent, #a07840, transparent)" }} />

          <p className="font-cormorant font-light" style={{ fontSize: "clamp(1.5rem, 7vw, 2.2rem)", color: "#3a2210" }}>
            «Туштажу» кафе
          </p>
          <p className="font-cormorant italic font-light" style={{ fontSize: "clamp(1.3rem, 6vw, 1.9rem)", color: "#5a3820" }}>
            Кош-Агач јурт
          </p>

          <div className="flex items-center gap-3 mt-4">
            <div className="h-px w-12" style={{ background: "#8a6530" }} />
            <span style={{ color: "#8a6530", fontSize: "0.7rem" }}>✦</span>
            <div className="h-px w-12" style={{ background: "#8a6530" }} />
          </div>
        </div>
      </div>

      {/* ── СЛАЙД 5: Пара — чистая без оверлея ── */}
      <div
        className="relative"
        style={{
          height: "100dvh",
          scrollSnapAlign: "start",
          backgroundImage: `url('${BG_COUPLE}')`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
          overflow: "hidden",
        }}
      />

    </div>
  );
}
