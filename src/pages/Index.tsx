import { useState } from "react";

const BG_COUPLE = "https://cdn.poehali.dev/projects/fc69c122-ca1e-48f2-a04e-677a5b3ed5fa/bucket/c077ee5e-7c57-4cae-b3cd-f7f368fbb9e8.png";
const BG_PATTERN = "https://cdn.poehali.dev/projects/fc69c122-ca1e-48f2-a04e-677a5b3ed5fa/bucket/c832a4b3-f139-4181-a6ac-127733a0a437.png";

export default function Index() {
  const [opened, setOpened] = useState(false);

  return (
    <div className="w-full font-cormorant" style={{ maxWidth: 480, margin: "0 auto" }}>

      {/* ── СЛАЙД 1: только "Айттыру" ── */}
      <div
        className="fixed inset-0 flex items-center justify-center"
        style={{
          backgroundImage: `url('${BG_PATTERN}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: opened ? 0 : 1,
          pointerEvents: opened ? "none" : "all",
          zIndex: 20,
          transition: "opacity 1.2s ease",
          maxWidth: 480,
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <button
          onClick={() => setOpened(true)}
          style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
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
        </button>
      </div>

      {/* ── СЛАЙД 2: как на референсе — весь текст на фоне с парой ── */}
      <div
        style={{
          opacity: opened ? 1 : 0,
          transition: "opacity 1.2s ease 0.3s",
          pointerEvents: opened ? "all" : "none",
        }}
      >
        <div
          className="relative flex flex-col items-center"
          style={{
            backgroundImage: `url('${BG_COUPLE}')`,
            backgroundSize: "cover",
            backgroundPosition: "center top",
            paddingBottom: "148%",
          }}
        >
          {/* Оверлей: верх светлее для читаемости текста, низ — пара чистая */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "linear-gradient(to bottom, rgba(245,239,227,0.72) 0%, rgba(245,239,227,0.5) 30%, rgba(245,239,227,0.1) 52%, rgba(245,239,227,0) 62%)",
            }}
          />

          {/* Весь текст в верхней части поверх арки */}
          <div
            className="absolute top-0 left-0 right-0 flex flex-col items-center text-center px-8 pt-8"
            style={{ zIndex: 2 }}
          >
            {/* Имена */}
            <h2
              className="font-cormorant italic font-light"
              style={{ fontSize: "clamp(2.6rem, 12vw, 4.2rem)", color: "#2e1a08", lineHeight: 1.05 }}
            >
              Аэлита &amp; Тузагаш
            </h2>

            <div className="flex items-center gap-2 my-3">
              <div className="h-px w-10" style={{ background: "linear-gradient(90deg, transparent, #a07840)" }} />
              <span style={{ color: "#a07840", fontSize: "0.7rem" }}>✦</span>
              <div className="h-px w-10" style={{ background: "linear-gradient(90deg, #a07840, transparent)" }} />
            </div>

            {/* Стихи */}
            <p className="font-cormorant text-lg font-light leading-[1.9]" style={{ color: "#3a2210" }}>
              Јайдыҥ јараш кӱӱнинде,<br />
              Јаҥы кӱйген очокко,<br />
              Јаҥарлап кожоҥ јайыгар,<br />
              Јараш алкыштар айдыгар.
            </p>

            <div className="flex items-center gap-2 my-3">
              <div className="h-px w-10" style={{ background: "linear-gradient(90deg, transparent, #a07840)" }} />
              <span style={{ color: "#a07840", fontSize: "0.7rem" }}>✦</span>
              <div className="h-px w-10" style={{ background: "linear-gradient(90deg, #a07840, transparent)" }} />
            </div>

            <p className="font-cormorant text-base font-light leading-[1.9] italic" style={{ color: "#5a3820" }}>
              Бистиҥ кудабыска<br />
              акту јӱрегистеҥ<br />
              кычырып турубыс.
            </p>

            <div className="flex items-center gap-2 my-3">
              <div className="h-px w-10" style={{ background: "linear-gradient(90deg, transparent, #a07840)" }} />
              <span style={{ color: "#a07840", fontSize: "0.7rem" }}>✦</span>
              <div className="h-px w-10" style={{ background: "linear-gradient(90deg, #a07840, transparent)" }} />
            </div>

            {/* Дата и место */}
            <p className="font-cormorant-sc font-light tracking-[0.08em]" style={{ fontSize: "clamp(1.4rem, 7vw, 2rem)", color: "#4a2e10" }}>
              14.08.2026
            </p>
            <p className="font-cormorant text-lg font-light mt-1" style={{ color: "#3a2210" }}>
              Саат 16:00
            </p>
            <p className="font-cormorant text-lg font-light mt-0.5" style={{ color: "#3a2210" }}>
              «Туштажу» кафе
            </p>
            <p className="font-cormorant italic text-base font-light mt-0.5" style={{ color: "#5a3820" }}>
              Кош-Агач јурт
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
