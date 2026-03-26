export default function Index() {
  return (
    <>
      <div className="grain-overlay" />

      <header className="header">
        <div className="logo">ПЁСИК*ГУЛЯЕТ</div>
        <nav>
          <a href="#">Услуги</a>
          <a href="#">О нас</a>
          <a href="#">Галерея</a>
          <a href="#">Контакты</a>
        </nav>
        <button className="btn-cta">Записаться</button>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              БЕЗ ХЛОПОТ,
              <br />
              ТОЛЬКО <span>ГУЛЯТЬ</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-10 leading-relaxed text-[#555]">
              Профессиональный выгул собак во Владивостоке. Заботливые выгульщики, безопасные маршруты и счастливый хвост каждый день.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <button className="btn-cta" style={{ background: "var(--primary)", color: "white" }}>
                Записаться
              </button>
              <button className="btn-cta" style={{ background: "white" }}>
                Смотреть услуги
              </button>
            </div>
          </div>
          <div className="hero-img">
            <img
              src="https://cdn.poehali.dev/projects/d09e422d-d47d-41c3-a2e0-a526c699f8c7/files/05b05934-9ec4-4d7a-9880-22d39b10a4c7.jpg"
              alt="Выгул собак во Владивостоке"
              style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "inherit" }}
            />
            <div className="sticker">
              ХВОСТ
              <br />
              ВИЛЯЕТ!
            </div>
            <div className="floating-tag hidden md:block" style={{ top: "20%", left: "10%" }}>
              #ВЛАДИВОСТОК
            </div>
            <div className="floating-tag hidden md:block" style={{ bottom: "30%", right: "20%" }}>
              ГАВ!
            </div>
          </div>
        </section>

        <div className="marquee">
          <div className="marquee-content">
            &nbsp; * ГУЛЯЕМ В ЛЮБУЮ ПОГОДУ * ОПЫТНЫЕ ВЫГУЛЬЩИКИ * ОТЧЁТ С ФОТО * СТРАХОВКА ВКЛЮЧЕНА * ВЛАДИВОСТОК * ХВОСТ ВИЛЯЕТ *
            ГУЛЯЕМ В ЛЮБУЮ ПОГОДУ * ОПЫТНЫЕ ВЫГУЛЬЩИКИ * ОТЧЁТ С ФОТО * СТРАХОВКА ВКЛЮЧЕНА * ВЛАДИВОСТОК * ХВОСТ ВИЛЯЕТ
          </div>
        </div>

        <section className="section-padding">
          <div className="section-header">
            <h2 className="section-title">НАШИ УСЛУГИ</h2>
            <a
              href="#"
              className="text-sm md:text-base"
              style={{ color: "var(--dark)", fontWeight: 800, textTransform: "uppercase" }}
            >
              Все пакеты
            </a>
          </div>

          <div className="menu-grid">
            {/* Пакет 1 */}
            <div className="menu-card">
              <span className="menu-tag">Хит</span>
              <img
                src="https://cdn.poehali.dev/projects/d09e422d-d47d-41c3-a2e0-a526c699f8c7/files/74fd72ea-d216-4978-b47a-7db5f5071974.jpg"
                alt="Стандартный выгул"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Стандарт</h3>
                  <span className="price">500 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  60 минут прогулки, отчёт с фото, маршрут по паркам города.
                </p>
              </div>
            </div>

            {/* Пакет 2 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--secondary)" }}>
                Популярное
              </span>
              <img
                src="https://cdn.poehali.dev/projects/d09e422d-d47d-41c3-a2e0-a526c699f8c7/files/ccc285fa-86da-40b2-8b3d-82652c6480cc.jpg"
                alt="Групповой выгул"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Групповой</h3>
                  <span className="price">350 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>Прогулка с компанией друзей-собак. Социализация и веселье!</p>
              </div>
            </div>

            {/* Пакет 3 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--accent)", color: "var(--dark)" }}>
                VIP
              </span>
              <img
                src="https://cdn.poehali.dev/projects/d09e422d-d47d-41c3-a2e0-a526c699f8c7/files/05b05934-9ec4-4d7a-9880-22d39b10a4c7.jpg"
                alt="VIP выгул"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>VIP Прогулка</h3>
                  <span className="price">900 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  2 часа, индивидуально, видеоотчёт, приоритетный выгульщик.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="retro-vibe">
          <div>
            <h2 className="vibe-title">ВАЙБ-ЧЕК ПРОЙДЕН.</h2>
            <p className="vibe-text">
              Мы не просто выгуливаем. Мы заботимся. Каждый выгульщик проходит обучение и любит собак так же, как вы. Ваш питомец
              в надёжных руках — с видом на Амурский залив и свежим морским воздухом Владивостока.
            </p>
            <button className="btn-cta" style={{ background: "var(--dark)", color: "white", borderColor: "white" }}>
              О нас
            </button>
          </div>
          <div className="vibe-img"></div>
        </section>

        <section className="section-padding">
          <h2 className="section-title" style={{ marginBottom: "40px", textAlign: "center" }}>
            @PESIK.VDK
          </h2>
          <div className="social-grid">
            <div className="social-item">
              <img
                src="https://cdn.poehali.dev/projects/d09e422d-d47d-41c3-a2e0-a526c699f8c7/files/74fd72ea-d216-4978-b47a-7db5f5071974.jpg"
                alt="Галерея 1"
              />
            </div>
            <div className="social-item">
              <img
                src="https://cdn.poehali.dev/projects/d09e422d-d47d-41c3-a2e0-a526c699f8c7/files/ccc285fa-86da-40b2-8b3d-82652c6480cc.jpg"
                alt="Галерея 2"
              />
            </div>
            <div className="social-item">
              <img
                src="https://cdn.poehali.dev/projects/d09e422d-d47d-41c3-a2e0-a526c699f8c7/files/05b05934-9ec4-4d7a-9880-22d39b10a4c7.jpg"
                alt="Галерея 3"
              />
            </div>
            <div className="social-item">
              <img
                src="https://cdn.poehali.dev/projects/d09e422d-d47d-41c3-a2e0-a526c699f8c7/files/74fd72ea-d216-4978-b47a-7db5f5071974.jpg"
                alt="Галерея 4"
              />
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div>
          <div className="footer-logo">ПЁСИК*ГУЛЯЕТ</div>
          <p style={{ color: "#666", lineHeight: 1.6 }}>
            Профессиональный выгул собак во Владивостоке. С любовью к каждому хвосту с 2024 года.
          </p>
        </div>
        <div className="footer-links">
          <h4>Навигация</h4>
          <ul>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Услуги
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                О нас
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Политика
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Контакты
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Часы работы</h4>
          <ul>
            <li>Пн–Пт: 7:00 – 21:00</li>
            <li>Сб–Вс: 8:00 – 20:00</li>
            <li>Без выходных</li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Контакты</h4>
          <ul>
            <li>Владивосток</li>
            <li>
              <a href="tel:+79141234567" style={{ color: "inherit", textDecoration: "none" }}>
                +7 (914) 123-45-67
              </a>
            </li>
            <li>
              <a href="mailto:hello@pesik.vdk" style={{ color: "inherit", textDecoration: "none" }}>
                hello@pesik.vdk
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
