import { useState } from "react";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [opened, setOpened] = useState(false);

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

      {/* === СЛАЙД 2+: СКРОЛЛИРУЕМАЯ ЧАСТЬ === */}
      <div
        style={{
          opacity: opened ? 1 : 0,
          transform: opened ? "translateY(0)" : "translateY(50px)",
          transition: "opacity 1.2s ease 0.3s, transform 1.2s ease 0.3s",
        }}
      >

        {/* — Секция: имена + стихи — */}
        <div
          className="relative flex flex-col items-center"
          style={{
            minHeight: "100dvh",
            backgroundImage: `url('https://cdn.poehali.dev/projects/fc69c122-ca1e-48f2-a04e-677a5b3ed5fa/bucket/c077ee5e-7c57-4cae-b3cd-f7f368fbb9e8.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center top",
          }}
        >
          {/* Мягкий градиент — имена поверх неба, стихи на светлом низу */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "linear-gradient(to bottom, rgba(248,244,236,0) 0%, rgba(248,244,236,0) 30%, rgba(248,244,236,0.6) 55%, rgba(248,244,236,0.92) 72%, rgba(248,244,236,1) 88%)",
            }}
          />

          <div className="relative z-10 flex flex-col items-center w-full px-8 pt-[52%] pb-16">

            {/* Имена */}
            <div
              className="text-center mb-10 w-full"
              style={{
                opacity: opened ? 1 : 0,
                transform: opened ? "translateY(0)" : "translateY(24px)",
                transition: "opacity 1s ease 0.9s, transform 1s ease 0.9s",
              }}
            >
              <div className="flex items-center justify-center gap-3 mb-5">
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

              <div className="flex items-center justify-center gap-2 mt-5">
                <div className="h-px w-8" style={{ background: "#8a6530" }} />
                <span style={{ color: "#8a6530", fontSize: "0.6rem" }}>✦</span>
                <span style={{ color: "#a07840", fontSize: "0.9rem" }}>✦</span>
                <span style={{ color: "#8a6530", fontSize: "0.6rem" }}>✦</span>
                <div className="h-px w-8" style={{ background: "#8a6530" }} />
              </div>
            </div>

            {/* Стихи — просто текст, без рамки */}
            <div
              className="text-center w-full"
              style={{
                opacity: opened ? 1 : 0,
                transform: opened ? "translateY(0)" : "translateY(30px)",
                transition: "opacity 1s ease 1.4s, transform 1s ease 1.4s",
              }}
            >
              <p className="font-cormorant text-xl font-light leading-[1.9]" style={{ color: "#3a2210" }}>
                Јайдыҥ јараш кӱӱнинде,<br />
                Јаҥы кӱйген очокко,<br />
                Јаҥарлап кожоҥ јайыгар,<br />
                Јараш алкыштар айдыгар.
              </p>

              <div className="my-5 flex justify-center">
                <div className="h-px w-20" style={{ background: "linear-gradient(90deg, transparent, #a07840, transparent)" }} />
              </div>

              <p className="font-cormorant text-lg font-light leading-[1.9] italic" style={{ color: "#5a3820" }}>
                Бистиҥ кудабыска<br />
                акту јӱрегистеҥ<br />
                кычырып турубыс.
              </p>
            </div>
          </div>
        </div>

        {/* — Секция: время и место — */}
        <div
          className="relative flex flex-col items-center justify-center px-8 py-20"
          style={{
            minHeight: "60dvh",
            backgroundImage: `url('https://cdn.poehali.dev/projects/fc69c122-ca1e-48f2-a04e-677a5b3ed5fa/bucket/c832a4b3-f139-4181-a6ac-127733a0a437.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center bottom",
          }}
        >
          {/* Лёгкий оверлей */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "rgba(248,244,236,0.72)" }}
          />

          <div className="relative z-10 flex flex-col items-center text-center gap-6 w-full">

            {/* Орнамент сверху */}
            <div className="flex items-center gap-3">
              <div className="h-px w-10" style={{ background: "#8a6530" }} />
              <span style={{ color: "#8a6530", fontSize: "0.75rem" }}>✦</span>
              <div className="h-px w-10" style={{ background: "#8a6530" }} />
            </div>

            {/* Дата */}
            <div>
              <p className="font-cormorant-sc font-light tracking-[0.12em]" style={{ fontSize: "clamp(2rem, 10vw, 3rem)", color: "#4a2e10" }}>
                14.08.2026
              </p>
            </div>

            {/* Разделитель */}
            <div className="h-px w-16" style={{ background: "linear-gradient(90deg, transparent, #a07840, transparent)" }} />

            {/* Место */}
            <div className="flex flex-col gap-1">
              <p className="font-cormorant text-2xl font-light" style={{ color: "#3a2210" }}>
                Кош-Агач јурт
              </p>
              <p className="font-cormorant italic text-xl font-light" style={{ color: "#5a3820" }}>
                кафе «Туштажу»
              </p>
            </div>

            {/* Разделитель */}
            <div className="h-px w-16" style={{ background: "linear-gradient(90deg, transparent, #a07840, transparent)" }} />

            {/* Время */}
            <p className="font-cormorant-sc font-light tracking-[0.15em]" style={{ fontSize: "clamp(1.8rem, 9vw, 2.6rem)", color: "#4a2e10" }}>
              16:00
            </p>

            {/* Орнамент снизу */}
            <div className="flex items-center gap-3 mt-2">
              <div className="h-px w-8" style={{ background: "#8a6530" }} />
              <span style={{ color: "#8a6530", fontSize: "0.6rem" }}>✦</span>
              <span style={{ color: "#a07840", fontSize: "0.9rem" }}>✦</span>
              <span style={{ color: "#8a6530", fontSize: "0.6rem" }}>✦</span>
              <div className="h-px w-8" style={{ background: "#8a6530" }} />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Index;
