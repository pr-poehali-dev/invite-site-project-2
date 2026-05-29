import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div
      className="min-h-screen font-cormorant"
      style={{ backgroundColor: "var(--ivory)" }}
    >
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-screen px-6 py-20 overflow-hidden">
        {/* Background texture */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        {/* Corner decorations */}
        <div className="absolute top-8 left-8 w-16 h-16 opacity-50" style={{ borderTop: '1px solid var(--gold)', borderLeft: '1px solid var(--gold)' }} />
        <div className="absolute top-8 right-8 w-16 h-16 opacity-50" style={{ borderTop: '1px solid var(--gold)', borderRight: '1px solid var(--gold)' }} />
        <div className="absolute bottom-8 left-8 w-16 h-16 opacity-50" style={{ borderBottom: '1px solid var(--gold)', borderLeft: '1px solid var(--gold)' }} />
        <div className="absolute bottom-8 right-8 w-16 h-16 opacity-50" style={{ borderBottom: '1px solid var(--gold)', borderRight: '1px solid var(--gold)' }} />

        {/* Small decorative label */}
        <div className="animate-fade-in mb-8">
          <div className="flex items-center gap-4">
            <div className="h-px w-12" style={{ background: 'var(--gold)' }} />
            <span className="font-cormorant-sc text-xs tracking-[0.4em] uppercase" style={{ color: 'var(--gold)' }}>
              Приглашение
            </span>
            <div className="h-px w-12" style={{ background: 'var(--gold)' }} />
          </div>
        </div>

        {/* Main title */}
        <div className="text-center mb-6 animate-fade-up">
          <p className="font-cormorant text-lg italic font-light tracking-widest mb-3" style={{ color: 'var(--gold)' }}>
            Уважаемые гости,
          </p>
          <h1 className="font-cormorant-sc font-light leading-none tracking-wider" style={{ fontSize: 'clamp(3rem, 8vw, 7rem)', color: 'var(--obsidian)' }}>
            Вы приглашены
          </h1>
        </div>

        {/* Gold ornament divider */}
        <div className="my-6 w-full max-w-md animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="gold-divider" />
          <div className="flex justify-center my-3">
            <span style={{ color: 'var(--gold)', fontSize: '1.5rem' }}>✦</span>
          </div>
          <div className="gold-divider" />
        </div>

        {/* Event subtitle */}
        <div className="text-center animate-fade-up" style={{ animationDelay: '0.5s' }}>
          <h2 className="font-cormorant text-3xl md:text-5xl italic font-light" style={{ color: 'var(--obsidian)' }}>
            Торжественный вечер
          </h2>
          <p className="mt-3 font-montserrat text-xs tracking-[0.3em] uppercase font-light" style={{ color: '#888' }}>
            в честь особого события
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 flex flex-col items-center gap-2">
          <span className="font-montserrat text-xs tracking-[0.2em] uppercase font-light" style={{ color: '#aaa' }}>Листать</span>
          <div className="w-px h-6" style={{ background: 'linear-gradient(to bottom, var(--gold), transparent)' }} />
        </div>
      </section>

      {/* Date & Venue Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-px w-8" style={{ background: 'var(--gold)' }} />
              <span className="font-cormorant-sc text-xs tracking-[0.4em] uppercase" style={{ color: 'var(--gold)' }}>Детали события</span>
              <div className="h-px w-8" style={{ background: 'var(--gold)' }} />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Date & Time Card */}
            <div className="relative p-10 text-center" style={{ background: 'white', border: '1px solid rgba(201,168,76,0.2)' }}>
              <div className="absolute top-0 left-0 w-6 h-6" style={{ borderTop: '1px solid var(--gold)', borderLeft: '1px solid var(--gold)' }} />
              <div className="absolute top-0 right-0 w-6 h-6" style={{ borderTop: '1px solid var(--gold)', borderRight: '1px solid var(--gold)' }} />
              <div className="absolute bottom-0 left-0 w-6 h-6" style={{ borderBottom: '1px solid var(--gold)', borderLeft: '1px solid var(--gold)' }} />
              <div className="absolute bottom-0 right-0 w-6 h-6" style={{ borderBottom: '1px solid var(--gold)', borderRight: '1px solid var(--gold)' }} />

              <div className="mb-4 flex justify-center">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'rgba(201,168,76,0.1)' }}>
                  <Icon name="Calendar" size={18} style={{ color: 'var(--gold)' }} />
                </div>
              </div>

              <p className="font-cormorant-sc text-xs tracking-[0.3em] uppercase mb-4" style={{ color: 'var(--gold)' }}>
                Дата и время
              </p>

              <p className="font-cormorant text-5xl font-light leading-none mb-2" style={{ color: 'var(--obsidian)' }}>
                14
              </p>
              <p className="font-cormorant-sc text-sm tracking-widest mb-4" style={{ color: 'var(--obsidian)' }}>
                ИЮНЯ, 2025
              </p>

              <div className="gold-divider mb-4" />

              <p className="font-montserrat text-xs tracking-[0.2em] font-light" style={{ color: '#888' }}>
                Начало в 19:00
              </p>
              <p className="font-montserrat text-xs tracking-[0.15em] mt-1 font-light" style={{ color: '#aaa' }}>
                Сбор гостей с 18:30
              </p>
            </div>

            {/* Venue Card */}
            <div className="relative p-10 text-center" style={{ background: 'white', border: '1px solid rgba(201,168,76,0.2)' }}>
              <div className="absolute top-0 left-0 w-6 h-6" style={{ borderTop: '1px solid var(--gold)', borderLeft: '1px solid var(--gold)' }} />
              <div className="absolute top-0 right-0 w-6 h-6" style={{ borderTop: '1px solid var(--gold)', borderRight: '1px solid var(--gold)' }} />
              <div className="absolute bottom-0 left-0 w-6 h-6" style={{ borderBottom: '1px solid var(--gold)', borderLeft: '1px solid var(--gold)' }} />
              <div className="absolute bottom-0 right-0 w-6 h-6" style={{ borderBottom: '1px solid var(--gold)', borderRight: '1px solid var(--gold)' }} />

              <div className="mb-4 flex justify-center">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'rgba(201,168,76,0.1)' }}>
                  <Icon name="MapPin" size={18} style={{ color: 'var(--gold)' }} />
                </div>
              </div>

              <p className="font-cormorant-sc text-xs tracking-[0.3em] uppercase mb-4" style={{ color: 'var(--gold)' }}>
                Место проведения
              </p>

              <p className="font-cormorant text-3xl italic font-light mb-2" style={{ color: 'var(--obsidian)' }}>
                Grand Palace Hotel
              </p>
              <p className="font-cormorant text-lg font-light mb-4" style={{ color: '#666' }}>
                Большой зал «Империал»
              </p>

              <div className="gold-divider mb-4" />

              <p className="font-montserrat text-xs tracking-[0.1em] font-light" style={{ color: '#888' }}>
                ул. Тверская, д. 15, Москва
              </p>
              <button
                className="mt-4 font-montserrat text-xs tracking-[0.2em] uppercase font-light transition-opacity hover:opacity-70"
                style={{ color: 'var(--gold)', background: 'none', border: 'none', cursor: 'pointer' }}
              >
                Построить маршрут →
              </button>
            </div>
          </div>

          {/* Dress code */}
          <div className="mt-8 p-6 text-center" style={{ border: '1px solid rgba(201,168,76,0.15)', background: 'rgba(201,168,76,0.03)' }}>
            <p className="font-cormorant-sc text-xs tracking-[0.4em] uppercase mb-2" style={{ color: 'var(--gold)' }}>
              Дресс-код
            </p>
            <p className="font-cormorant text-2xl italic font-light" style={{ color: 'var(--obsidian)' }}>
              Black Tie / Вечерний наряд
            </p>
          </div>
        </div>
      </section>

      {/* Ornament divider */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center gap-6">
          <div className="flex-1 gold-divider" />
          <span style={{ color: 'var(--gold)', fontSize: '1.2rem' }}>✦</span>
          <span style={{ color: 'var(--gold)', fontSize: '0.8rem' }}>✦</span>
          <span style={{ color: 'var(--gold)', fontSize: '1.2rem' }}>✦</span>
          <div className="flex-1 gold-divider" />
        </div>
      </div>

      {/* Contacts Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-px w-8" style={{ background: 'var(--gold)' }} />
              <span className="font-cormorant-sc text-xs tracking-[0.4em] uppercase" style={{ color: 'var(--gold)' }}>Контакты</span>
              <div className="h-px w-8" style={{ background: 'var(--gold)' }} />
            </div>
            <h3 className="font-cormorant text-4xl font-light italic" style={{ color: 'var(--obsidian)' }}>
              Организаторы
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Organizer 1 */}
            <div className="relative p-8 text-center" style={{ background: 'white', border: '1px solid rgba(201,168,76,0.2)' }}>
              <div className="absolute top-0 left-0 w-5 h-5" style={{ borderTop: '1px solid var(--gold)', borderLeft: '1px solid var(--gold)' }} />
              <div className="absolute bottom-0 right-0 w-5 h-5" style={{ borderBottom: '1px solid var(--gold)', borderRight: '1px solid var(--gold)' }} />

              <div className="mb-4 flex justify-center">
                <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, rgba(201,168,76,0.15), rgba(201,168,76,0.05))' }}>
                  <span className="font-cormorant-sc text-xl" style={{ color: 'var(--gold)' }}>АК</span>
                </div>
              </div>

              <p className="font-cormorant text-2xl font-light mb-1" style={{ color: 'var(--obsidian)' }}>
                Александра Климова
              </p>
              <p className="font-montserrat text-xs tracking-widest uppercase font-light mb-5" style={{ color: '#aaa' }}>
                Ведущий организатор
              </p>

              <div className="space-y-3">
                <a href="tel:+79001234567" className="flex items-center justify-center gap-3 transition-opacity hover:opacity-70">
                  <Icon name="Phone" size={14} style={{ color: 'var(--gold)' }} />
                  <span className="font-montserrat text-sm font-light" style={{ color: '#555' }}>+7 (900) 123-45-67</span>
                </a>
                <a href="mailto:a.klimova@event.ru" className="flex items-center justify-center gap-3 transition-opacity hover:opacity-70">
                  <Icon name="Mail" size={14} style={{ color: 'var(--gold)' }} />
                  <span className="font-montserrat text-sm font-light" style={{ color: '#555' }}>a.klimova@event.ru</span>
                </a>
                <a href="https://t.me/klimova_event" className="flex items-center justify-center gap-3 transition-opacity hover:opacity-70">
                  <Icon name="Send" size={14} style={{ color: 'var(--gold)' }} />
                  <span className="font-montserrat text-sm font-light" style={{ color: '#555' }}>@klimova_event</span>
                </a>
              </div>
            </div>

            {/* Organizer 2 */}
            <div className="relative p-8 text-center" style={{ background: 'white', border: '1px solid rgba(201,168,76,0.2)' }}>
              <div className="absolute top-0 left-0 w-5 h-5" style={{ borderTop: '1px solid var(--gold)', borderLeft: '1px solid var(--gold)' }} />
              <div className="absolute bottom-0 right-0 w-5 h-5" style={{ borderBottom: '1px solid var(--gold)', borderRight: '1px solid var(--gold)' }} />

              <div className="mb-4 flex justify-center">
                <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, rgba(201,168,76,0.15), rgba(201,168,76,0.05))' }}>
                  <span className="font-cormorant-sc text-xl" style={{ color: 'var(--gold)' }}>МВ</span>
                </div>
              </div>

              <p className="font-cormorant text-2xl font-light mb-1" style={{ color: 'var(--obsidian)' }}>
                Михаил Волков
              </p>
              <p className="font-montserrat text-xs tracking-widest uppercase font-light mb-5" style={{ color: '#aaa' }}>
                Координатор события
              </p>

              <div className="space-y-3">
                <a href="tel:+79007654321" className="flex items-center justify-center gap-3 transition-opacity hover:opacity-70">
                  <Icon name="Phone" size={14} style={{ color: 'var(--gold)' }} />
                  <span className="font-montserrat text-sm font-light" style={{ color: '#555' }}>+7 (900) 765-43-21</span>
                </a>
                <a href="mailto:m.volkov@event.ru" className="flex items-center justify-center gap-3 transition-opacity hover:opacity-70">
                  <Icon name="Mail" size={14} style={{ color: 'var(--gold)' }} />
                  <span className="font-montserrat text-sm font-light" style={{ color: '#555' }}>m.volkov@event.ru</span>
                </a>
                <a href="https://t.me/volkov_event" className="flex items-center justify-center gap-3 transition-opacity hover:opacity-70">
                  <Icon name="Send" size={14} style={{ color: 'var(--gold)' }} />
                  <span className="font-montserrat text-sm font-light" style={{ color: '#555' }}>@volkov_event</span>
                </a>
              </div>
            </div>
          </div>

          {/* RSVP block */}
          <div className="text-center">
            <p className="font-cormorant text-xl italic font-light mb-6" style={{ color: '#777' }}>
              Просим подтвердить своё присутствие до 7 июня 2025
            </p>
            <button
              className="font-cormorant-sc text-sm tracking-[0.3em] uppercase px-12 py-4 transition-all hover:opacity-90"
              style={{
                background: 'var(--obsidian)',
                color: '#e8d5a3',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Подтвердить участие
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="gold-divider mb-8" />
          <div className="flex items-center justify-center gap-3 mb-4">
            <span style={{ color: 'var(--gold)', fontSize: '0.7rem' }}>✦</span>
            <span style={{ color: 'var(--gold)', fontSize: '1rem' }}>✦</span>
            <span style={{ color: 'var(--gold)', fontSize: '0.7rem' }}>✦</span>
          </div>
          <p className="font-cormorant italic text-lg font-light" style={{ color: '#aaa' }}>
            Будем рады видеть вас
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
