const services = [
  {
    label: "Opravy automobilu",
    text: "Komplexní opravy motorových vozidel od běžné údržby po náročnější zásahy.",
  },
  {
    label: "Exteriér vozu",
    text: "Opravy a výměny poničených plechů, plastů a světel.",
  },
  {
    label: "Brzdy a podvozek",
    text: "Výměny brzd a další běžné opravy spojené s bezpečným provozem auta.",
  },
  {
    label: "Motory",
    text: "Opravy motorů včetně generálek podle stavu a rozsahu závady.",
  },
  {
    label: "Sváření",
    text: "Opravy výfuků a reznoucích částí automobilu.",
  },
  {
    label: "Diagnostika",
    text: "Diagnostika vozidel VW, Škoda, SEAT a Audi pomocí VAGProg 2009, k dispozici je také ATAL.",
  },
];

const links = [
  ["Informace", "#informace"],
  ["Služby", "#sluzby"],
  ["Diagnostika", "#diagnostika"],
  ["Ceník", "#cenik"],
  ["Kontakt", "#kontakt"],
];

const facts = [
  ["Adresa", "Petrovická 130, Ústí nad Labem, Božtěšice"],
  ["PSČ", "403 40"],
  ["GPS", "50°41'28.37\"N; 14°1'9.99\"E"],
];

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#uvod" aria-label="Autoservis Kolář">
          <span>AK</span>
          <strong>Autoservis Kolář</strong>
        </a>
        <nav aria-label="Hlavní navigace">
          {links.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>
      </header>

      <section className="hero" id="uvod">
        <div className="hero-copy">
          <p className="eyebrow">Ústí nad Labem · Božtěšice</p>
          <h1>Autoservis Kolář</h1>
          <p className="lead">
            Komplexní opravy motorových vozidel, diagnostika a běžný autoservis
            v Ústí nad Labem.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="tel:+420603476581">
              Zavolat 603 476 581
            </a>
            <a className="button secondary" href="mailto:autoserviskolar@email.cz">
              Napsat e-mail
            </a>
          </div>
        </div>
        <aside className="hero-panel" aria-label="Rychlé informace">
          <div className="panel-head">
            <span>Rychlý kontakt</span>
            <strong>300 Kč/hod</strong>
          </div>
          <dl>
            <div>
              <dt>Telefon</dt>
              <dd>
                <a href="tel:+420603476581">603 476 581</a>
              </dd>
            </div>
            <div>
              <dt>E-mail</dt>
              <dd>
                <a href="mailto:autoserviskolar@email.cz">
                  autoserviskolar@email.cz
                </a>
              </dd>
            </div>
            <div>
              <dt>Adresa</dt>
              <dd>Petrovická 130, 400 10 Ústí nad Labem</dd>
            </div>
          </dl>
          <div className="meter">
            <span />
            <span />
            <span />
          </div>
        </aside>
      </section>

      <section className="section intro" id="informace">
        <div>
          <p className="eyebrow">Informace o servisu</p>
          <h2>Kvalitně odvedená práce za dobrou cenu.</h2>
        </div>
        <div className="intro-text">
          <p>
            Jsme firma, zabývající se komplexní opravou motorových vozidel.
            Naším heslem je kvalitně provedená práce za dobrou cenu a spokojený
            zákazník.
          </p>
          <div className="facts">
            {facts.map(([label, value]) => (
              <div key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="sluzby">
        <div className="section-head">
          <p className="eyebrow">Služby</p>
          <h2>Běžné služby autoservisu i konkrétní opravy.</h2>
          <p>
            Poskytujeme běžné služby autoservisu. Příklady práce a specializace
            najdete níže.
          </p>
        </div>
        <div className="service-grid">
          {services.map((service, index) => (
            <article key={service.label} className="service-card">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{service.label}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section split">
        <article className="feature-card">
          <p className="eyebrow">Opravy automobilu</p>
          <h2>Exteriér, brzdy, motory, výfuky a sváření.</h2>
          <p>
            V našem autoservisu poskytujeme komplexní opravy motorových vozidel.
            Ať už se jedná o opravy exteriéru, opravu či výměnu poničených
            plechů a plastů, výměnu světel, výměnu brzd, opravy a generálky
            motorů nebo další běžné opravy.
          </p>
          <p>
            Mezi naše služby patří také sváření, takže není problém opravit
            výfuk či reznoucí části automobilu.
          </p>
        </article>
        <article className="feature-card accent" id="diagnostika">
          <p className="eyebrow">Diagnostika auta</p>
          <h2>VAGProg 2009 a ATAL.</h2>
          <p>
            VAGProg 2009 používáme pro zjištění závad na opravovaném automobilu
            u vozidel koncernu VW, Škoda, SEAT a Audi.
          </p>
          <p>
            Druhým programem, který máme k dispozici, je program ATAL.
          </p>
        </article>
      </section>

      <section className="section price-band" id="cenik">
        <div>
          <p className="eyebrow">Ceník služeb</p>
          <h2>Práce autoservisu</h2>
        </div>
        <div className="price">
          <span>300 Kč</span>
          <strong>za hodinu práce</strong>
        </div>
        <div className="partner-panel">
          <p>Dodavatel náhradních dílů</p>
          <a href="http://www.autoandel.cz/" target="_blank" rel="noreferrer">
            <img src="/auto-andel.png" alt="Auto Anděl" />
          </a>
        </div>
      </section>

      <section className="section partners">
        <div className="section-head">
          <p className="eyebrow">Spolupráce a Facebook</p>
          <h2>Zůstaňte v kontaktu.</h2>
          <p>Spolupracujeme s dovozcem autodílů Auto Anděl.</p>
        </div>
        <div className="partner-grid">
          <a href="http://www.autoandel.cz/" target="_blank" rel="noreferrer">
            <img src="/auto-andel.png" alt="Auto Anděl" />
          </a>
          <a href="http://superpromotor.eu/" target="_blank" rel="noreferrer">
            <img src="/superpromotor.png" alt="Superpromotor" />
          </a>
          <a
            className="facebook-card"
            href="https://www.facebook.com/autoserviskolar"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/facebook-autoservis-kolar.png" alt="Facebook Autoservis Kolář" />
            <span>Přidejte si nás na Facebooku :)</span>
          </a>
        </div>
      </section>

      <section className="section contact" id="kontakt">
        <div className="contact-copy">
          <p className="eyebrow">Kontakt</p>
          <h2>Petrovická 130, Ústí nad Labem.</h2>
          <p>
            Pokud u nás necháte svůj vůz, nemusíte mít strach. Několik metrů od
            nás je autobusová zastávka, ze které se pohodlně dostanete například
            do centra města.
          </p>
          <div className="contact-list">
            <a href="tel:+420603476581">603 476 581</a>
            <a href="mailto:autoserviskolar@email.cz">autoserviskolar@email.cz</a>
            <span>GPS: 50°41'28.37"N; 14°1'9.99"E</span>
          </div>
          <div className="lines">
            <div>
              <span>Linka č.15</span>
              <p>směr centrum města: Divadlo, Mírové náměstí, Hlavní nádraží ČD</p>
            </div>
            <div>
              <span>Linka č.16</span>
              <p>směr Všebořice s navazujícím spojem do centra města</p>
            </div>
          </div>
        </div>
        <div className="map-wrap">
          <iframe
            title="Mapa Autoservis Kolář"
            src="https://www.openstreetmap.org/export/embed.html?bbox=14.0149%2C50.6889%2C14.0242%2C50.6935&layer=mapnik&marker=50.6912139%2C14.0194417"
          />
          <a
            href="https://www.openstreetmap.org/?mlat=50.6912139&mlon=14.0194417#map=17/50.6912139/14.0194417"
            target="_blank"
            rel="noreferrer"
          >
            Otevřít mapu
          </a>
        </div>
      </section>

      <footer>
        <span>© Autoservis Kolář 2011-2016</span>
        <a href="mailto:autoserviskolar@email.cz">autoserviskolar@email.cz</a>
      </footer>
    </main>
  );
}
