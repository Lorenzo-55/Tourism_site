// src/pages/LandingPage/LandingPage.jsx
import { useEffect, useMemo, useState } from "react";
import NavBar from "../../Components/Navbar/Navbar.jsx";
import MapSection from "../../Components/MapSection/MapSection";
import SimpleMapsSriLanka from "../../Components/SimpleMapsSriLanka/SimpleMapsSriLanka.jsx";
import Footer from "../../Components/Footer/Footer";
import "./LandingPage.css";

const SHOW_SIMPLEMAPS_MAP = true;

function HeroSlider() {
  const slides = useMemo(
    () => [
      { src: `${import.meta.env.BASE_URL}images2.jpg`, alt: "Sri Lanka coast" },
      { src: `${import.meta.env.BASE_URL}images4.avif`, alt: "Tea hills" },
      { src: `${import.meta.env.BASE_URL}images5.jpg`, alt: "Temple & heritage" },
    ],
    []
  );

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 4500);
    return () => window.clearInterval(id);
  }, [slides.length]);

  return (
    <section className="hero">
      {slides.map((s, i) => (
        <img
          key={s.src}
          className={`hero-img ${i === index ? "is-active" : ""}`}
          src={s.src}
          alt={s.alt}
          loading={i === 0 ? "eager" : "lazy"}
        />
      ))}

      <div className="hero-overlay" />

      <div className="hero-text">
        <div className="hero-kicker">VISIT</div>
        <div className="hero-title">
          SRI
          <br />
          LANKA
        </div>
      </div>

      <div className="hero-controls" aria-label="Hero slideshow controls">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            className={`hero-dot ${i === index ? "is-active" : ""}`}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="section about">
      <div className="container about-grid">
        <h1 className="about-title">
          VISIT
          <br />
          SRI LANKA
        </h1>

        <div className="about-copy">
          <p>
            An island just 65,610 square kilometres, yet Sri Lanka feels like the
            world within your reach. Drive from sun-drenched beaches to misty
            tea hills, wander lush rainforests, and explore ancient cities
            steeped in history and wonder.
          </p>
          <p>
            Savour vibrant cuisine—spicy curries to fresh seafood—then slow down
            to the rhythm of local life and colourful traditions. Every day here
            is a new adventure, a feast for the senses, and a place to fall in
            love again and again.
          </p>

          <a className="about-link" href="#">
            ABOUT US <span className="about-arrow" aria-hidden="true">›</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function StaySection() {
  const cards = [
    {
      title: "RESORTS",
      desc: "From beachfront escapes to chic boutique resorts, find your perfect stay by the sea.",
      img: "Resort1.jpg",
    },
    {
      title: "HOTELS",
      desc: "City comfort, heritage charm, or hill-country views—choose a hotel that fits your trip.",
      img: "Hotel1.jpg",
    },
    {
      title: "VILLAS",
      desc: "Private villas for families and friends—space, quiet, and the best of island living.",
      img: "Villa1.webp",
    },
    {
      title: "GUESTHOUSES",
      desc: "Stay local and cozy with welcoming hosts and authentic neighbourhood vibes.",
      img: "Guesthouse1.jpg",
    },
  ];

  return (
    <section className="section stay">
      <div className="container">
        <div className="section-head">
          <div className="section-kicker">STAY</div>
          <div className="section-underline" />
        </div>

        <div className="stay-grid">
          {cards.map((c) => (
            <article key={c.title} className="stay-card">
              <div className="stay-imgWrap">
                <img className="stay-img" src={c.img} alt={c.title} loading="lazy" />
              </div>

              <div className="stay-body">
                <h3 className="stay-title">{c.title}</h3>
                <p className="stay-desc">{c.desc}</p>

                <a className="stay-btn" href="#">
                  EXPLORE
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="stay-footer">
          <a className="stay-outlineBtn" href="#">
            VIEW TRAVEL AGENTS <span aria-hidden="true">›</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function MapSectionSwitcher() {
  if (SHOW_SIMPLEMAPS_MAP) {
    return <SimpleMapsSriLanka />;
  }

  return <MapSection />;
}

export default function Landing() {
  return (
    <div className="landing">
      <NavBar />
      <HeroSlider />
      <AboutSection />
      <MapSectionSwitcher />
      <StaySection />
      <Footer />
    </div>
  );
}