// src/pages/PlacePage/PlacePage.jsx
import { Link, useParams } from "react-router-dom";
import NavBar from "../../Components/Navbar/Navbar.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import { placesData } from "../../data/placesData.js";
import "./PlacePage.css";

function SectionHeading({ kicker, title, text }) {
  return (
    <div className="place-sectionHead">
      {kicker && <div className="place-sectionKicker">{kicker}</div>}
      <h2 className="place-sectionTitle">{title}</h2>
      {text && <p className="place-sectionText">{text}</p>}
    </div>
  );
}

function HeroSection({ place }) {
  return (
    <section
      className="place-hero"
      style={{ backgroundImage: `url(${place.heroImage})` }}
    >
      <div className="place-heroOverlay" />
      <div className="place-heroInner container">
        <div className="place-heroKicker">{place.kicker}</div>
        <h1 className="place-heroTitle">{place.name}</h1>
        <p className="place-heroSummary">{place.summary}</p>

        <div className="place-heroActions">
          <a className="place-heroBtn" href="#overview">
            Explore
          </a>
          <Link className="place-heroBtn is-secondary" to="/">
            Back Home
          </Link>
        </div>
      </div>
    </section>
  );
}

function QuickFacts({ facts }) {
  if (!facts?.length) return null;

  return (
    <section id="overview" className="place-section">
      <div className="container">
        <SectionHeading
          kicker="OVERVIEW"
          title="Quick Snapshot"
          text="A simple overview of what this destination is best known for."
        />

        <div className="place-factsGrid">
          {facts.map((fact) => (
            <article key={fact.label} className="place-factCard">
              <div className="place-factLabel">{fact.label}</div>
              <div className="place-factValue">{fact.value}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function AnchorNav({ place }) {
  const links = [
    place.highlights?.length && { href: "#highlights", label: "Highlights" },
    place.history?.length && { href: "#history", label: "History" },
    place.beaches?.length && { href: "#beaches", label: "Beaches" },
    place.activities?.length && { href: "#activities", label: "Activities" },
    place.culture?.length && { href: "#culture", label: "Culture" },
    place.practicalInfo?.length && { href: "#practical", label: "Practical Info" },
  ].filter(Boolean);

  if (!links.length) return null;

  return (
    <section className="place-anchorWrap">
      <div className="container">
        <nav className="place-anchorNav" aria-label="Page sections">
          {links.map((link) => (
            <a key={link.href} className="place-anchorLink" href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
}

function CardGridSection({ id, kicker, title, text, items }) {
  if (!items?.length) return null;

  return (
    <section id={id} className="place-section">
      <div className="container">
        <SectionHeading kicker={kicker} title={title} text={text} />

        <div className="place-cardGrid">
          {items.map((item) => (
            <article key={item.name} className="place-card">
              {item.category || item.type ? (
                <div className="place-cardMeta">{item.category || item.type}</div>
              ) : null}
              <h3 className="place-cardTitle">{item.name}</h3>
              <p className="place-cardDesc">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function HistorySection({ history }) {
  if (!history?.length) return null;

  return (
    <section id="history" className="place-section place-sectionAlt">
      <div className="container">
        <SectionHeading
          kicker="HISTORY"
          title="A Brief Historical Timeline"
          text="A structured look at the major periods that shaped the city."
        />

        <div className="place-timeline">
          {history.map((item) => (
            <article key={item.title} className="place-timelineItem">
              <div className="place-timelineDot" aria-hidden="true" />
              <div className="place-timelineContent">
                <h3 className="place-timelineTitle">{item.title}</h3>
                <p className="place-timelineBody">{item.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ActivitiesSection({ activities }) {
  if (!activities?.length) return null;

  return (
    <section id="activities" className="place-section">
      <div className="container">
        <SectionHeading
          kicker="EXPERIENCES"
          title="Things to Do"
          text="Activities and local experiences connected to this destination."
        />

        <div className="place-activityGrid">
          {activities.map((activity) => (
            <article key={activity.title} className="place-activityCard">
              <h3 className="place-activityTitle">{activity.title}</h3>
              <p className="place-activityBody">{activity.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PracticalInfo({ items }) {
  if (!items?.length) return null;

  return (
    <section id="practical" className="place-section place-sectionAlt">
      <div className="container">
        <SectionHeading
          kicker="PRACTICAL INFO"
          title="Good to Know Before You Go"
        />

        <div className="place-practicalList">
          {items.map((item, index) => (
            <article key={index} className="place-practicalItem">
              <span className="place-practicalBullet" aria-hidden="true">
                •
              </span>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function NotFoundState() {
  return (
    <main className="place-missing">
      <NavBar />
      <section className="place-missingBody">
        <div className="container">
          <h1 className="place-missingTitle">Place not found</h1>
          <p className="place-missingText">
            The selected destination could not be found in the data file.
          </p>
          <Link className="place-missingBtn" to="/">
            Return Home
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default function PlacePage() {
  const { slug } = useParams();
  const place = placesData.find((item) => item.slug === slug);

  if (!place) {
    return <NotFoundState />;
  }

  return (
    <div className="place-page">
      <NavBar />
      <HeroSection place={place} />
      <AnchorNav place={place} />
      <QuickFacts facts={place.quickFacts} />

      <CardGridSection
        id="highlights"
        kicker="HIGHLIGHTS"
        title={`Top Places in ${place.name}`}
        text="The most important places to see first."
        items={place.highlights}
      />

      <HistorySection history={place.history} />

      <CardGridSection
        id="beaches"
        kicker="BEACHES"
        title="Beaches & Coast"
        text="A look at the nearby coastline and the kind of beach experience each place offers."
        items={place.beaches}
      />

      <ActivitiesSection activities={place.activities} />

      <CardGridSection
        id="culture"
        kicker="CULTURE"
        title="Culture & Heritage"
        text="Religious sites, heritage landmarks, and places with strong local significance."
        items={place.culture}
      />

      <PracticalInfo items={place.practicalInfo} />
      <Footer />
    </div>
  );
}