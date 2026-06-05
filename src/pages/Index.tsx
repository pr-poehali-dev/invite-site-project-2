import { useState } from "react";
import Icon from "@/components/ui/icon";

const BG_COUPLE = "https://cdn.poehali.dev/projects/fc69c122-ca1e-48f2-a04e-677a5b3ed5fa/bucket/c077ee5e-7c57-4cae-b3cd-f7f368fbb9e8.png";
const BG_PATTERN = "https://cdn.poehali.dev/projects/fc69c122-ca1e-48f2-a04e-677a5b3ed5fa/bucket/c832a4b3-f139-4181-a6ac-127733a0a437.png";

const Index = () => {
  const [opened, setOpened] = useState(false);

  return (
    <div className="relative w-full font-cormorant" style={{ maxWidth: 480, margin: "0 auto", minHeight: "100dvh" }}>

      {/* === СЛАЙД 1: АЙТТЫРУ === */}
      <div
        className="fixed flex flex-col items-center justify-center"
        style={{
          inset: 0,
          backgroundImage: `url('${BG_PATTERN}')`,
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

        <button
          onClick={() => setOpened(true)}
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

      {/* === ОСНОВНАЯ ЧАСТЬ === */}
      <div
        style={{
          opacity: opened ? 1 : 0,
          transform: opened ? "translateY(0)" : "translateY(50px)",
          transition: "opacity 1.2s ease 0.3s, transform 1.2s ease 0.3s",
        }}
      >
        {/* Верхний блок: текст на фоне узора */}
        <div
          className="relative flex flex-col items-center px-8 pt-10 pb-12"
          style={{
            backgroundImage: `url('${BG_PATTERN}')`,
            backgroundSize: "cover",
            backgroundPosition: "center top",
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "rgba(248,244,236,0.6)" }}
          />

          <div className="relative z-10 flex flex-col items-center w-full gap-7">

            {/* Имена */}
            <div
              className="text-center w-full"
              style={{
                opacity: opened ? 1 : 0,
                transform: opened ? "translateY(0)" : "translateY(24px)",
                transition: "opacity 1s ease 0.9s, transform 1s ease 0.9s",
              }}
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px w-10" style={{ background: "#8a6530" }} />
                <span style={{ color: "#8a6530", fontSize: "0.75rem" }}>✦</span>
                <div className="h-px w-10" style={{ background: "#8a6530" }} />
              </div>

              <h2 className="font-cormorant italic font-light" style={{ fontSize: "clamp(2.6rem, 11vw, 4rem)", color: "#2e1a08", lineHeight: 1.1 }}>
                Аэлита
              </h2>
              <div className="flex items-center justify-center gap-4 my-2">
                <div className="h-px w-8" style={{ background: "rgba(160,120,64,0.5)" }} />
                <span className="font-cormorant text-3xl font-light" style={{ color: "#a07840" }}>&</span>
                <div className="h-px w-8" style={{ background: "rgba(160,120,64,0.5)" }} />
              </div>
              <h2 className="font-cormorant italic font-light" style={{ fontSize: "clamp(2.6rem, 11vw, 4rem)", color: "#2e1a08", lineHeight: 1.1 }}>
                Тузагаш
              </h2>

              <div className="flex items-center justify-center gap-2 mt-4">
                <div className="h-px w-8" style={{ background: "#8a6530" }} />
                <span style={{ color: "#8a6530", fontSize: "0.6rem" }}>✦</span>
                <span style={{ color: "#a07840", fontSize: "0.9rem" }}>✦</span>
                <span style={{ color: "#8a6530", fontSize: "0.6rem" }}>✦</span>
                <div className="h-px w-8" style={{ background: "#8a6530" }} />
              </div>
            </div>

            {/* Дата и место */}
            <div
              className="text-center w-full flex flex-col items-center gap-3"
              style={{
                opacity: opened ? 1 : 0,
                transform: opened ? "translateY(0)" : "translateY(24px)",
                transition: "opacity 1s ease 1.3s, transform 1s ease 1.3s",
              }}
            >
              <p className="font-cormorant-sc font-light tracking-[0.1em]" style={{ fontSize: "clamp(1.7rem, 8vw, 2.4rem)", color: "#4a2e10" }}>
                14.08.2026
              </p>
              <div className="h-px w-14" style={{ background: "linear-gradient(90deg, transparent, #a07840, transparent)" }} />
              <div className="flex flex-col gap-0.5">
                <p className="font-cormorant text-xl font-light" style={{ color: "#3a2210" }}>Кош-Агач јурт</p>
                <p className="font-cormorant italic text-lg font-light" style={{ color: "#5a3820" }}>кафе «Туштажу»</p>
              </div>
              <div className="h-px w-14" style={{ background: "linear-gradient(90deg, transparent, #a07840, transparent)" }} />
              <p className="font-cormorant-sc font-light tracking-[0.12em]" style={{ fontSize: "clamp(1.6rem, 8vw, 2.2rem)", color: "#4a2e10" }}>
                16:00
              </p>
              <div className="flex items-center gap-2">
                <div className="h-px w-8" style={{ background: "#8a6530" }} />
                <span style={{ color: "#8a6530", fontSize: "0.6rem" }}>✦</span>
                <span style={{ color: "#a07840", fontSize: "0.9rem" }}>✦</span>
                <span style={{ color: "#8a6530", fontSize: "0.6rem" }}>✦</span>
                <div className="h-px w-8" style={{ background: "#8a6530" }} />
              </div>
            </div>

            {/* Стихи */}
            <div
              className="text-center w-full"
              style={{
                opacity: opened ? 1 : 0,
                transform: opened ? "translateY(0)" : "translateY(30px)",
                transition: "opacity 1s ease 1.7s, transform 1s ease 1.7s",
              }}
            >
              <p className="font-cormorant text-lg font-light leading-[1.85]" style={{ color: "#3a2210" }}>
                Јайдыҥ јараш кӱӱнинде,<br />
                Јаҥы кӱйген очокко,<br />
                Јаҥарлап кожоҥ јайыгар,<br />
                Јараш алкыштар айдыгар.
              </p>
              <div className="my-4 flex justify-center">
                <div className="h-px w-20" style={{ background: "linear-gradient(90deg, transparent, #a07840, transparent)" }} />
              </div>
              <p className="font-cormorant text-base font-light leading-[1.85] italic" style={{ color: "#5a3820" }}>
                Бистиҥ кудабыска<br />
                акту јӱрегистеҥ<br />
                кычырып турубыс.
              </p>
            </div>

          </div>
        </div>

        {/* Нижний блок: пара в оригинальном размере */}
        <div
          style={{
            backgroundImage: `url('${BG_COUPLE}')`,
            backgroundSize: "cover",
            backgroundPosition: "center top",
            paddingBottom: "148%",
          }}
        />
      </div>
    </div>
  );
};

export default Index;
