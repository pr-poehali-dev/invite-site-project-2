import { useState } from "react";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [opened, setOpened] = useState(false);

  const handleOpen = () => {
    setOpened(true);
  };

  return (
    <div className="relative w-full font-cormorant" style={{ maxWidth: 480, margin: "0 auto", minHeight: "100dvh" }}>

      {/* === СЛАЙД 1: АЙТТЫРУ === */}
      <div
        className="fixed flex flex-col items-center justify-center"
        style={{
          inset: 0,
          backgroundImage: `url('https://cdn.poehali.dev/projects/fc69c122-ca1e-48f2-a04e-677a5b3ed5fa/bucket/c832a4b3-f139-4181-a6ac-127733a0a437.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          opacity: opened ? 0 : 1,
          pointerEvents: opened ? "none" : "all",
          zIndex: opened ? 0 : 20,
          transition: "opacity 1.2s ease",
        }}
      >
        <h1
          className="font-cormorant-sc font-light text-center"
          style={{ fontSize: "clamp(4.5rem, 22vw, 8rem)", color: "#4a2e10", letterSpacing: "0.08em", lineHeight: 1 }}
        >
          Айттыру
        </h1>

        {/* Tap hint at bottom */}
        <button
          onClick={handleOpen}
          className="absolute bottom-16 flex flex-col items-center gap-2 group"
          style={{ background: "none", border: "none", cursor: "pointer", left: "50%", transform: "translateX(-50%)" }}
        >
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center transition-transform group-hover:scale-110"
            style={{ border: "1px solid rgba(160,120,64,0.5)", background: "rgba(248,244,236,0.35)" }}
          >
            <Icon name="ChevronDown" size={20} style={{ color: "#8a6530" }} />
          </div>
        </button>
      </div>

      {/* === СЛАЙД 2: ОСНОВНАЯ ЧАСТЬ === */}
      <div
        className="min-h-screen flex flex-col"
        style={{
          backgroundImage: `url('https://cdn.poehali.dev/projects/fc69c122-ca1e-48f2-a04e-677a5b3ed5fa/bucket/c077ee5e-7c57-4cae-b3cd-f7f368fbb9e8.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: opened ? 1 : 0,
          transform: opened ? "translateY(0)" : "translateY(50px)",
          transition: "opacity 1.2s ease 0.3s, transform 1.2s ease 0.3s",
        }}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, rgba(248,244,236,0.05) 0%, rgba(248,244,236,0.45) 38%, rgba(248,244,236,0.82) 70%, rgba(248,244,236,0.95) 100%)",
          }}
        />

        <div className="relative z-10 flex flex-col items-center px-8 pb-20 pt-[48%]">

          {/* Names block */}
          <div
            className="text-center mb-10 w-full"
            style={{
              opacity: opened ? 1 : 0,
              transform: opened ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 1s ease 0.9s, transform 1s ease 0.9s",
            }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-10" style={{ background: "#8a6530" }} />
              <span style={{ color: "#8a6530", fontSize: "0.75rem" }}>✦</span>
              <div className="h-px w-10" style={{ background: "#8a6530" }} />
            </div>

            <h2
              className="font-cormorant italic font-light"
              style={{ fontSize: "clamp(2.8rem, 12vw, 4.5rem)", color: "#2e1a08", lineHeight: 1.1 }}
            >
              Аэлита
            </h2>

            <div className="flex items-center justify-center gap-4 my-3">
              <div className="h-px w-8" style={{ background: "rgba(160,120,64,0.5)" }} />
              <span className="font-cormorant text-3xl font-light" style={{ color: "#a07840" }}>&</span>
              <div className="h-px w-8" style={{ background: "rgba(160,120,64,0.5)" }} />
            </div>

            <h2
              className="font-cormorant italic font-light"
              style={{ fontSize: "clamp(2.8rem, 12vw, 4.5rem)", color: "#2e1a08", lineHeight: 1.1 }}
            >
              Тузагаш
            </h2>

            <div className="flex items-center justify-center gap-2 mt-6">
              <div className="h-px w-8" style={{ background: "#8a6530" }} />
              <span style={{ color: "#8a6530", fontSize: "0.6rem" }}>✦</span>
              <span style={{ color: "#a07840", fontSize: "0.9rem" }}>✦</span>
              <span style={{ color: "#8a6530", fontSize: "0.6rem" }}>✦</span>
              <div className="h-px w-8" style={{ background: "#8a6530" }} />
            </div>
          </div>

          {/* Poem block */}
          <div
            className="w-full max-w-xs text-center"
            style={{
              opacity: opened ? 1 : 0,
              transform: opened ? "translateY(0)" : "translateY(30px)",
              transition: "opacity 1s ease 1.4s, transform 1s ease 1.4s",
            }}
          >
            <p className="font-cormorant-sc text-xs tracking-[0.4em] uppercase mb-5" style={{ color: "#8a6530" }}>
              Алкыш
            </p>

            <div
              className="relative px-6 py-8"
              style={{ background: "rgba(252,249,242,0.82)", border: "1px solid rgba(160,120,64,0.2)" }}
            >
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-5 h-5" style={{ borderTop: "1px solid #a07840", borderLeft: "1px solid #a07840" }} />
              <div className="absolute top-0 right-0 w-5 h-5" style={{ borderTop: "1px solid #a07840", borderRight: "1px solid #a07840" }} />
              <div className="absolute bottom-0 left-0 w-5 h-5" style={{ borderBottom: "1px solid #a07840", borderLeft: "1px solid #a07840" }} />
              <div className="absolute bottom-0 right-0 w-5 h-5" style={{ borderBottom: "1px solid #a07840", borderRight: "1px solid #a07840" }} />

              <p className="font-cormorant text-lg font-light leading-[1.8]" style={{ color: "#2e1a08" }}>
                Јайдыҥ јараш кӱӱнинде,<br />
                Јаҥы кӱйген очокко,<br />
                Јаҥарлап кожоҥ јайыгар,<br />
                Јараш алкыштар айдыгар.
              </p>

              <div className="my-5 flex justify-center">
                <div className="h-px w-20" style={{ background: "linear-gradient(90deg, transparent, #a07840, transparent)" }} />
              </div>

              <p className="font-cormorant text-base font-light leading-[1.8] italic" style={{ color: "#5a3820" }}>
                Бистиҥ кудабыска<br />
                акту јӱрегистеҥ<br />
                кычырып турубыс.
              </p>
            </div>

            <div className="flex items-center justify-center gap-3 mt-8">
              <div className="h-px w-10" style={{ background: "#8a6530" }} />
              <span style={{ color: "#8a6530" }}>✦</span>
              <div className="h-px w-10" style={{ background: "#8a6530" }} />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Index;