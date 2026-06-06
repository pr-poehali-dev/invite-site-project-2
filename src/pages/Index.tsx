import { useState, useEffect, useRef } from "react";

const BG_COUPLE = "https://cdn.poehali.dev/projects/fc69c122-ca1e-48f2-a04e-677a5b3ed5fa/bucket/c077ee5e-7c57-4cae-b3cd-f7f368fbb9e8.png";
const BG_PATTERN = "https://cdn.poehali.dev/projects/fc69c122-ca1e-48f2-a04e-677a5b3ed5fa/bucket/c832a4b3-f139-4181-a6ac-127733a0a437.png";

function useVisible(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

const fadeUp = (visible: boolean, delay = 0) => ({
  opacity: visible ? 1 : 0,
  transform: visible ? "translateY(0)" : "translateY(32px)",
  transition: `opacity 0.9s ease ${delay}s, transform 0.9s ease ${delay}s`,
});

const Divider = () => (
  <div className="flex items-center justify-center gap-2 my-1">
    <div className="h-px w-12" style={{ background: "linear-gradient(90deg, transparent, #a07840)" }} />
    <span style={{ color: "#a07840", fontSize: "0.65rem" }}>✦</span>
    <div className="h-px w-12" style={{ background: "linear-gradient(90deg, #a07840, transparent)" }} />
  </div>
);

export default function Index() {
  const [opened, setOpened] = useState(false);

  const s1 = useVisible();
  const s2 = useVisible();
  const s3 = useVisible();
  const s4 = useVisible();

  return (
    <div className="w-full font-cormorant" style={{ maxWidth: 480, margin: "0 auto", background: "#f5efe3" }}>

      {/* ── ЭКРАН 1: обложка ── */}
      <div
        className="relative flex flex-col items-center justify-center"
        style={{
          height: "100dvh",
          backgroundImage: `url('${BG_PATTERN}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0" style={{ background: "rgba(245,239,227,0.45)" }} />
        <div className="relative z-10 flex flex-col items-center gap-6 px-8 text-center">
          <p className="font-cormorant tracking-[0.25em] uppercase text-xs" style={{ color: "#8a6530" }}>
            Айттыру
          </p>
          <h1
            className="font-cormorant italic font-light"
            style={{ fontSize: "clamp(3.2rem, 16vw, 5.5rem)", color: "#2e1a08", lineHeight: 1.05 }}
          >
            Аэлита<br />
            <span style={{ fontSize: "0.55em", color: "#a07840", fontStyle: "normal" }}>&</span><br />
            Тузагаш
          </h1>
          <Divider />
          <p className="font-cormorant text-lg font-light" style={{ color: "#5a3820" }}>14 · 08 · 2026</p>
        </div>

        {/* стрелка вниз */}
        <button
          onClick={() => { setOpened(true); window.scrollTo({ top: window.innerHeight, behavior: "smooth" }); }}
          className="absolute bottom-10 flex flex-col items-center gap-2"
          style={{ background: "none", border: "none", cursor: "pointer", left: "50%", transform: "translateX(-50%)" }}
        >
          <span className="font-cormorant text-xs tracking-widest" style={{ color: "#8a6530" }}>открыть</span>
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center"
            style={{ border: "1px solid rgba(160,120,64,0.4)", background: "rgba(245,239,227,0.4)" }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 3v10M3 9l5 5 5-5" stroke="#8a6530" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </button>
      </div>

      {/* ── ЭКРАН 2: имена крупно ── */}
      <div
        ref={s1.ref}
        className="relative flex flex-col items-center justify-center px-8 py-20 text-center"
        style={{
          minHeight: "100dvh",
          backgroundImage: `url('${BG_PATTERN}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0" style={{ background: "rgba(245,239,227,0.55)" }} />
        <div className="relative z-10 flex flex-col items-center gap-5 w-full">
          <div style={fadeUp(s1.visible, 0)}>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-12" style={{ background: "#8a6530" }} />
              <span style={{ color: "#8a6530", fontSize: "0.7rem" }}>✦</span>
              <div className="h-px w-12" style={{ background: "#8a6530" }} />
            </div>
            <h2
              className="font-cormorant italic font-light"
              style={{ fontSize: "clamp(3rem, 14vw, 5rem)", color: "#2e1a08", lineHeight: 1.05 }}
            >
              Аэлита
            </h2>
            <div className="flex items-center justify-center gap-4 my-3">
              <div className="h-px w-10" style={{ background: "rgba(160,120,64,0.4)" }} />
              <span className="font-cormorant text-4xl font-light" style={{ color: "#a07840" }}>&</span>
              <div className="h-px w-10" style={{ background: "rgba(160,120,64,0.4)" }} />
            </div>
            <h2
              className="font-cormorant italic font-light"
              style={{ fontSize: "clamp(3rem, 14vw, 5rem)", color: "#2e1a08", lineHeight: 1.05 }}
            >
              Тузагаш
            </h2>
            <div className="flex items-center justify-center gap-2 mt-6">
              <div className="h-px w-8" style={{ background: "#8a6530" }} />
              <span style={{ color: "#8a6530", fontSize: "0.55rem" }}>✦</span>
              <span style={{ color: "#a07840", fontSize: "0.85rem" }}>✦</span>
              <span style={{ color: "#8a6530", fontSize: "0.55rem" }}>✦</span>
              <div className="h-px w-8" style={{ background: "#8a6530" }} />
            </div>
          </div>
        </div>
      </div>

      {/* ── ЭКРАН 3: стихи ── */}
      <div
        ref={s2.ref}
        className="relative flex flex-col items-center justify-center px-10 py-20 text-center"
        style={{
          minHeight: "80dvh",
          backgroundImage: `url('${BG_PATTERN}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0" style={{ background: "rgba(245,239,227,0.6)" }} />
        <div className="relative z-10 flex flex-col items-center gap-5 w-full">
          <div style={fadeUp(s2.visible, 0)}>
            <p className="font-cormorant text-xl font-light leading-[2]" style={{ color: "#3a2210" }}>
              Јайдыҥ јараш кӱӱнинде,<br />
              Јаҥы кӱйген очокко,<br />
              Јаҥарлап кожоҥ јайыгар,<br />
              Јараш алкыштар айдыгар.
            </p>
          </div>
          <div style={fadeUp(s2.visible, 0.3)}>
            <Divider />
          </div>
          <div style={fadeUp(s2.visible, 0.5)}>
            <p className="font-cormorant text-lg font-light leading-[2] italic" style={{ color: "#5a3820" }}>
              Бистиҥ кудабыска<br />
              акту јӱрегистеҥ<br />
              кычырып турубыс.
            </p>
          </div>
        </div>
      </div>

      {/* ── ЭКРАН 4: дата и место ── */}
      <div
        ref={s3.ref}
        className="relative flex flex-col items-center justify-center px-8 py-16 text-center"
        style={{
          minHeight: "70dvh",
          backgroundImage: `url('${BG_PATTERN}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0" style={{ background: "rgba(245,239,227,0.55)" }} />
        <div className="relative z-10 flex flex-col items-center gap-4 w-full">
          <div style={fadeUp(s3.visible, 0)}>
            <div className="flex items-center gap-3 mb-2">
              <div className="h-px w-10" style={{ background: "#8a6530" }} />
              <span style={{ color: "#8a6530", fontSize: "0.7rem" }}>✦</span>
              <div className="h-px w-10" style={{ background: "#8a6530" }} />
            </div>
          </div>
          <div style={fadeUp(s3.visible, 0.15)}>
            <p className="font-cormorant-sc font-light tracking-[0.12em]" style={{ fontSize: "clamp(2rem, 10vw, 3rem)", color: "#4a2e10" }}>
              14.08.2026
            </p>
          </div>
          <div style={fadeUp(s3.visible, 0.3)}>
            <div className="h-px w-16 my-1" style={{ background: "linear-gradient(90deg, transparent, #a07840, transparent)" }} />
          </div>
          <div style={fadeUp(s3.visible, 0.4)}>
            <p className="font-cormorant-sc font-light tracking-[0.15em]" style={{ fontSize: "clamp(1.8rem, 9vw, 2.6rem)", color: "#4a2e10" }}>
              Саат 16:00
            </p>
          </div>
          <div style={fadeUp(s3.visible, 0.55)}>
            <div className="h-px w-16 my-1" style={{ background: "linear-gradient(90deg, transparent, #a07840, transparent)" }} />
          </div>
          <div style={fadeUp(s3.visible, 0.65)}>
            <p className="font-cormorant text-2xl font-light" style={{ color: "#3a2210" }}>«Туштажу» кафе</p>
            <p className="font-cormorant italic text-xl font-light mt-1" style={{ color: "#5a3820" }}>Кош-Агач јурт</p>
          </div>
          <div style={fadeUp(s3.visible, 0.8)}>
            <div className="flex items-center gap-2 mt-3">
              <div className="h-px w-8" style={{ background: "#8a6530" }} />
              <span style={{ color: "#8a6530", fontSize: "0.55rem" }}>✦</span>
              <span style={{ color: "#a07840", fontSize: "0.85rem" }}>✦</span>
              <span style={{ color: "#8a6530", fontSize: "0.55rem" }}>✦</span>
              <div className="h-px w-8" style={{ background: "#8a6530" }} />
            </div>
          </div>
        </div>
      </div>

      {/* ── ЭКРАН 5: пара — финал ── */}
      <div
        ref={s4.ref}
        className="relative"
        style={{
          backgroundImage: `url('${BG_COUPLE}')`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
          paddingBottom: "148%",
        }}
      >
        {/* лёгкий оверлей только на самый верх для плавного перехода */}
        <div
          className="absolute top-0 left-0 right-0 pointer-events-none"
          style={{
            height: "18%",
            background: "linear-gradient(to bottom, #f5efe3, transparent)",
          }}
        />
        <div
          className="absolute inset-0 flex flex-col items-center justify-start pt-8"
          style={{ zIndex: 2 }}
        >
          <div style={fadeUp(s4.visible, 0)}>
            <p
              className="font-cormorant italic text-center"
              style={{ fontSize: "clamp(1.1rem, 5vw, 1.5rem)", color: "#3a2210", letterSpacing: "0.04em" }}
            >
              Силерди кӧрӧргӧ<br />
              <span style={{ color: "#8a6530" }}>сакып јадыбыс</span>
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
