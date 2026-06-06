import { useState, useEffect, useRef } from "react";

const BG_PATTERN = "https://cdn.poehali.dev/projects/fc69c122-ca1e-48f2-a04e-677a5b3ed5fa/bucket/c832a4b3-f139-4181-a6ac-127733a0a437.png";
const BG_COUPLE = "https://cdn.poehali.dev/projects/fc69c122-ca1e-48f2-a04e-677a5b3ed5fa/bucket/50c9ce63-37d3-4cfe-a4bc-a139bc5eda3a.jpeg";

const Divider = () => (
  <div className="flex items-center justify-center gap-2 my-4">
    <div className="h-px w-12" style={{ background: "linear-gradient(90deg, transparent, #a07840)" }} />
    <span style={{ color: "#a07840", fontSize: "0.7rem" }}>✦</span>
    <div className="h-px w-12" style={{ background: "linear-gradient(90deg, #a07840, transparent)" }} />
  </div>
);

function useFadeIn() {
  const ref = useRef<HTMLDivElement | HTMLImageElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

export default function Index() {
  const [opened, setOpened] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const names = useFadeIn();
  const poem = useFadeIn();
  const date = useFadeIn();
  const couple = useFadeIn();

  const handleOpen = () => {
    setOpened(true);
    setTimeout(() => {
      scrollRef.current?.scrollTo({ top: window.innerHeight, behavior: "smooth" });
    }, 900);
  };

  const fade = (visible: boolean, delay = 0) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(28px)",
    transition: `opacity 1s ease ${delay}s, transform 1s ease ${delay}s`,
  });

  return (
    <div
      ref={scrollRef}
      className="w-full font-cormorant"
      style={{
        maxWidth: 480,
        margin: "0 auto",
      }}
    >

      {/* ── СЛАЙД 1: Айттыру ── */}
      <div
        className="relative flex flex-col items-center justify-center"
        style={{
          height: "100dvh",
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
          onClick={handleOpen}
          className="absolute bottom-12 flex flex-col items-center gap-2"
          style={{ background: "none", border: "none", cursor: "pointer", left: "50%", transform: "translateX(-50%)" }}
        >
          <span
            className="font-cormorant tracking-[0.2em] text-xs uppercase"
            style={{
              color: "#8a6530",
              opacity: opened ? 0 : 1,
              transition: "opacity 0.6s ease",
            }}
          >
            открыть
          </span>
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center"
            style={{
              border: "1px solid rgba(160,120,64,0.45)",
              background: "rgba(245,239,227,0.35)",
              opacity: opened ? 0 : 1,
              transition: "opacity 0.6s ease",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 2v10M2 8l5 5 5-5" stroke="#8a6530" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </button>
      </div>

      {/* ── СЛАЙД 2: Имена ── */}
      <div
        ref={names.ref}
        className="relative flex flex-col items-center justify-center text-center px-10"
        style={{
          height: "100dvh",
          backgroundImage: `url('${BG_PATTERN}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0" style={{ background: "rgba(245,239,227,0.52)" }} />
        <div className="relative z-10 flex flex-col items-center" style={fade(names.visible, 0)}>
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
        ref={poem.ref}
        className="relative flex flex-col items-center justify-center text-center px-10"
        style={{
          height: "100dvh",
          backgroundImage: `url('${BG_PATTERN}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0" style={{ background: "rgba(245,239,227,0.58)" }} />
        <div className="relative z-10 flex flex-col items-center">
          <div style={fade(poem.visible, 0)}>
            <p className="font-cormorant text-xl font-light leading-[2]" style={{ color: "#3a2210" }}>
              Јайдыҥ јараш кӱӱнинде,<br />
              Јаҥы кӱйген очокко,<br />
              Јаҥарлап кожоҥ јайыгар,<br />
              Јараш алкыштар айдыгар.
            </p>
          </div>
          <div style={fade(poem.visible, 0.3)}><Divider /></div>
          <div style={fade(poem.visible, 0.5)}>
            <p className="font-cormorant text-lg font-light leading-[2] italic" style={{ color: "#5a3820" }}>
              Бистиҥ кудабыска<br />
              акту јӱрегистеҥ<br />
              кычырып турубыс.
            </p>
          </div>
        </div>
      </div>

      {/* ── СЛАЙД 4: Дата, время, место ── */}
      <div
        ref={date.ref}
        className="relative flex flex-col items-center justify-center text-center px-10"
        style={{
          height: "100dvh",
          backgroundImage: `url('${BG_PATTERN}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0" style={{ background: "rgba(245,239,227,0.55)" }} />
        <div className="relative z-10 flex flex-col items-center gap-2">
          <div style={fade(date.visible, 0)}>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12" style={{ background: "#8a6530" }} />
              <span style={{ color: "#8a6530", fontSize: "0.7rem" }}>✦</span>
              <div className="h-px w-12" style={{ background: "#8a6530" }} />
            </div>
          </div>
          <div style={fade(date.visible, 0.15)}>
            <p className="font-cormorant-sc font-light tracking-[0.1em]" style={{ fontSize: "clamp(2rem, 10vw, 3rem)", color: "#4a2e10" }}>
              14.08.2026
            </p>
          </div>
          <div style={fade(date.visible, 0.3)}>
            <div className="h-px w-16 my-2" style={{ background: "linear-gradient(90deg, transparent, #a07840, transparent)" }} />
          </div>
          <div style={fade(date.visible, 0.4)}>
            <p className="font-cormorant font-light" style={{ fontSize: "clamp(1.6rem, 8vw, 2.4rem)", color: "#3a2210" }}>
              Саат 16:00
            </p>
          </div>
          <div style={fade(date.visible, 0.55)}>
            <div className="h-px w-16 my-2" style={{ background: "linear-gradient(90deg, transparent, #a07840, transparent)" }} />
          </div>
          <div style={fade(date.visible, 0.65)}>
            <p className="font-cormorant font-light" style={{ fontSize: "clamp(1.5rem, 7vw, 2.2rem)", color: "#3a2210" }}>
              «Туштажу» кафе
            </p>
            <p className="font-cormorant italic font-light mt-1" style={{ fontSize: "clamp(1.3rem, 6vw, 1.9rem)", color: "#5a3820" }}>
              Кош-Агач јурт
            </p>
          </div>
          <div style={fade(date.visible, 0.8)}>
            <div className="flex items-center gap-3 mt-4">
              <div className="h-px w-12" style={{ background: "#8a6530" }} />
              <span style={{ color: "#8a6530", fontSize: "0.7rem" }}>✦</span>
              <div className="h-px w-12" style={{ background: "#8a6530" }} />
            </div>
          </div>
        </div>
      </div>

      {/* ── СЛАЙД 5: Пара — целиком ── */}
      <img
        ref={couple.ref}
        src={BG_COUPLE}
        alt="пара"
        style={{ width: "100%", height: "auto", display: "block" }}
      />

    </div>
  );
}