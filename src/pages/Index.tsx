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
        {/*
          Единая секция: фон с парой.
          Изображение: арка сверху, пара снизу.
          backgroundPosition: center top — арка+небо сверху, пара внизу.
          Высота подобрана так, чтобы пара отображалась в оригинальном масштабе в конце.
        */}
        <div
          className="relative flex flex-col"
          style={{
            backgroundImage: `url('${BG_COUPLE}')`,
            backgroundSize: "100% auto",   /* фиксированная ширина, высота пропорциональна */
            backgroundPosition: "center top",
            backgroundRepeat: "no-repeat",
            backgroundColor: "#f2ece0",    /* цвет фона под изображением (продолжение тона) */
          }}
        >
          {/* Лёгкий оверлей только поверх верхней части для читаемости */}
          <div
            className="absolute top-0 left-0 right-0 pointer-events-none"
            style={{
              height: "60%",
              background: "linear-gradient(to bottom, rgba(248,244,236,0.6) 0%, rgba(248,244,236,0.3) 60%, rgba(248,244,236,0) 100%)",
            }}
          />

          {/* Весь текст сверху */}
          <div className="relative z-10 flex flex-col items-center w-full px-8 pt-10 pb-8">

            {/* Имена */}
            <div
              className="text-center mb-8 w-full"
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

            {/* Стихи */}
            <div
              className="text-center w-full mb-8"
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

            {/* Дата и место — сразу после стихов */}
            <div
              className="text-center w-full flex flex-col items-center gap-5"
              style={{
                opacity: opened ? 1 : 0,
                transform: opened ? "translateY(0)" : "translateY(30px)",
                transition: "opacity 1s ease 1.9s, transform 1s ease 1.9s",
              }}
            >
              <div className="flex items-center gap-3">
                <div className="h-px w-10" style={{ background: "#8a6530" }} />
                <span style={{ color: "#8a6530", fontSize: "0.75rem" }}>✦</span>
                <div className="h-px w-10" style={{ background: "#8a6530" }} />
              </div>

              <p className="font-cormorant-sc font-light tracking-[0.12em]" style={{ fontSize: "clamp(2rem, 10vw, 2.8rem)", color: "#4a2e10" }}>
                14.08.2026
              </p>

              <div className="h-px w-16" style={{ background: "linear-gradient(90deg, transparent, #a07840, transparent)" }} />

              <div className="flex flex-col gap-1">
                <p className="font-cormorant text-2xl font-light" style={{ color: "#3a2210" }}>
                  Кош-Агач јурт
                </p>
                <p className="font-cormorant italic text-xl font-light" style={{ color: "#5a3820" }}>
                  кафе «Туштажу»
                </p>
              </div>

              <div className="h-px w-16" style={{ background: "linear-gradient(90deg, transparent, #a07840, transparent)" }} />

              <p className="font-cormorant-sc font-light tracking-[0.15em]" style={{ fontSize: "clamp(1.8rem, 9vw, 2.4rem)", color: "#4a2e10" }}>
                16:00
              </p>

              <div className="flex items-center gap-3">
                <div className="h-px w-8" style={{ background: "#8a6530" }} />
                <span style={{ color: "#8a6530", fontSize: "0.6rem" }}>✦</span>
                <span style={{ color: "#a07840", fontSize: "0.9rem" }}>✦</span>
                <span style={{ color: "#8a6530", fontSize: "0.6rem" }}>✦</span>
                <div className="h-px w-8" style={{ background: "#8a6530" }} />
              </div>
            </div>

            {/* Отступ перед парой — чтобы пара оказалась после всего текста */}
            <div style={{ height: "8vw" }} />
          </div>

          {/* Пара — картинка вставлена как img, точный оригинальный размер, без растяжки */}
          <img
            src={BG_COUPLE}
            alt=""
            style={{
              width: "100%",
              display: "block",
              marginTop: "-30%",          /* поднимаем картинку вверх, чтобы арка совпала с фоном */
              position: "relative",
              zIndex: 1,
              pointerEvents: "none",
              userSelect: "none",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
