import { Link, useParams } from "react-router-dom";
import { useMemo, useState } from "react";
import NavBar from "../../Components/Navbar/Navbar.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import { placesData } from "../../data/placesData.js";
import "./PlacePage.css";

function hasItems(value) {
  if (Array.isArray(value)) return value.length > 0;
  if (value && typeof value === "object") return Object.keys(value).length > 0;
  return Boolean(value);
}

function SectionHeading({ kicker, title, text, align = "center" }) {
  return (
    <div className={`place-sectionHead ${align === "left" ? "is-left" : ""}`}>
      {kicker ? <div className="place-sectionKicker">{kicker}</div> : null}
      <h2 className="place-sectionTitle">{title}</h2>
      {text ? <p className="place-sectionText">{text}</p> : null}
    </div>
  );
}

function TagList({ items, className = "" }) {
  if (!items?.length) return null;

  return (
    <div className={`place-tagList ${className}`}>
      {items.map((item) => (
        <span key={item} className="place-tag">
          {item}
        </span>
      ))}
    </div>
  );
}

function DetailLinks({ item }) {
  const links = [
    item.website && { href: item.website, label: "Website" },
    item.mapLink && { href: item.mapLink, label: "Map" },
    item.reservationLink && { href: item.reservationLink, label: "Reserve" },
  ].filter(Boolean);

  if (!links.length) return null;

  return (
    <div className="place-cardLinks">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          className="place-cardLink"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}

function PracticalNotes({ notes }) {
  if (!notes?.length) return null;

  return (
    <ul className="place-noteList">
      {notes.map((note, index) => (
        <li key={`${note}-${index}`}>{note}</li>
      ))}
    </ul>
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
        {place.kicker ? <div className="place-heroKicker">{place.kicker}</div> : null}
        <h1 className="place-heroTitle">{place.name}</h1>
        {place.summary ? <p className="place-heroSummary">{place.summary}</p> : null}

        <TagList items={place.tags || place.highlightsTags} className="place-heroTags" />

        {place.quickFacts?.length ? (
          <div className="place-heroFacts">
            {place.quickFacts.slice(0, 5).map((fact) => (
              <article key={fact.label} className="place-heroFact">
                <span className="place-heroFactLabel">{fact.label}</span>
                <span className="place-heroFactValue">{fact.value}</span>
              </article>
            ))}
          </div>
        ) : null}

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

function QuickOverview({ overview }) {
  if (!overview?.length) return null;

  return (
    <section id="overview" className="place-section">
      <div className="container">
        <SectionHeading
          kicker="OVERVIEW"
          title="Quick Snapshot"
          text="A fast, scannable introduction before you dive deeper."
        />

        <div className="place-overviewGrid">
          {overview.map((item) => (
            <article key={item.title} className="place-overviewCard">
              <h3 className="place-overviewTitle">{item.title}</h3>
              <p className="place-overviewText">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function AnchorNav({ sections }) {
  if (!sections.length) return null;

  return (
    <section className="place-anchorWrap">
      <div className="container">
        <nav className="place-anchorNav" aria-label="Page sections">
          {sections.map((section) => (
            <a key={section.href} className="place-anchorLink" href={section.href}>
              {section.label}
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
}

function GenericCard({ item, variant = "default" }) {
  return (
    <article className={`place-card ${variant !== "default" ? `is-${variant}` : ""}`}>
      {item.image ? (
        <div className="place-cardImageWrap">
          <img className="place-cardImage" src={item.image} alt={item.name} />
        </div>
      ) : null}

      <div className="place-cardBody">
        {(item.category || item.type || item.religion) ? (
          <div className="place-cardMeta">
            {item.category || item.type || item.religion}
          </div>
        ) : null}

        <h3 className="place-cardTitle">{item.name}</h3>

        {(item.location || item.area) ? (
          <div className="place-cardSubmeta">
            {[item.location, item.area].filter(Boolean).join(" • ")}
          </div>
        ) : null}

        {item.shortDescription ? (
          <p className="place-cardDesc">{item.shortDescription}</p>
        ) : item.description ? (
          <p className="place-cardDesc">{item.description}</p>
        ) : null}

        {item.longDescription ? (
          <p className="place-cardLong">{item.longDescription}</p>
        ) : null}

        <TagList items={item.tags} />

        <div className="place-cardInfoList">
          {item.focus ? (
            <div className="place-cardInfoRow">
              <span>Focus</span>
              <strong>{item.focus}</strong>
            </div>
          ) : null}
          {item.architecturalNote ? (
            <div className="place-cardInfoRow">
              <span>Architecture</span>
              <strong>{item.architecturalNote}</strong>
            </div>
          ) : null}
          {item.timings ? (
            <div className="place-cardInfoRow">
              <span>Timings</span>
              <strong>{item.timings}</strong>
            </div>
          ) : null}
          {item.price ? (
            <div className="place-cardInfoRow">
              <span>Price</span>
              <strong>{item.price}</strong>
            </div>
          ) : null}
          {item.bookingRequired ? (
            <div className="place-cardInfoRow">
              <span>Booking</span>
              <strong>Required</strong>
            </div>
          ) : null}
        </div>

        <PracticalNotes notes={item.practicalNotes} />
        <DetailLinks item={item} />
      </div>
    </article>
  );
}

function CardGridSection({
  id,
  kicker,
  title,
  text,
  items,
  variant = "default",
}) {
  if (!items?.length) return null;

  return (
    <section id={id} className="place-section">
      <div className="container">
        <SectionHeading kicker={kicker} title={title} text={text} />
        <div className="place-cardGrid">
          {items.map((item) => (
            <GenericCard key={item.name} item={item} variant={variant} />
          ))}
        </div>
      </div>
    </section>
  );
}

function HistorySection({ history }) {
  if (!history?.periods?.length) return null;

  return (
    <section id="history" className="place-section place-sectionAlt">
      <div className="container">
        <SectionHeading
          kicker="HISTORY"
          title="Historical Timeline"
          text={
            history.intro ||
            "A structured view of the major eras that shaped the city."
          }
        />

        <div className="place-timeline">
          {history.periods.map((period) => (
            <article key={period.title} className="place-timelineItem">
              <div className="place-timelineDot" aria-hidden="true" />
              <div className="place-timelineContent">
                <h3 className="place-timelineTitle">{period.title}</h3>

                {period.intro ? (
                  <p className="place-timelineBody">{period.intro}</p>
                ) : null}

                {period.points?.length ? (
                  <ul className="place-timelineList">
                    {period.points.map((point, index) => (
                      <li key={`${period.title}-${index}`}>{point}</li>
                    ))}
                  </ul>
                ) : null}

                {period.legacy ? (
                  <div className="place-timelineLegacy">
                    <span>Visible legacy</span>
                    <p>{period.legacy}</p>
                  </div>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TodaySection({ today }) {
  if (!today) return null;

  return (
    <section id="today" className="place-section">
      <div className="container">
        <SectionHeading
          kicker="TODAY"
          title={`${today.title || "The City Today"}`}
          text={today.intro}
        />

        {today.cards?.length ? (
          <div className="place-overviewGrid">
            {today.cards.map((item) => (
              <article key={item.title} className="place-overviewCard">
                <h3 className="place-overviewTitle">{item.title}</h3>
                <p className="place-overviewText">{item.text}</p>
              </article>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}

function DistrictsSection({ districts }) {
  if (!districts?.length) return null;

  return (
    <section id="districts" className="place-section place-sectionAlt">
      <div className="container">
        <SectionHeading
          kicker="DISTRICTS"
          title="District & Neighborhood Guide"
          text="Explore the city area by area without turning the page into a giant wall of text."
        />

        <div className="place-accordionList">
          {districts.map((district) => (
            <details key={district.name} className="place-accordionItem">
              <summary className="place-accordionSummary">
                <div>
                  <strong>{district.name}</strong>
                  {district.number ? (
                    <span className="place-accordionNumber">{district.number}</span>
                  ) : null}
                </div>
                <span className="place-accordionType">
                  {district.type || district.character}
                </span>
              </summary>

              <div className="place-accordionBody">
                {district.bestKnownFor ? (
                  <p className="place-accordionLead">
                    <strong>Best known for:</strong> {district.bestKnownFor}
                  </p>
                ) : null}

                {district.description ? <p>{district.description}</p> : null}

                <TagList items={district.tags} />

                {district.highlights?.length ? (
                  <ul className="place-inlineList">
                    {district.highlights.map((item, index) => (
                      <li key={`${district.name}-${index}`}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function EconomySection({ economy }) {
  if (!economy?.sectors?.length && !economy?.intro) return null;

  return (
    <section id="economy" className="place-section">
      <div className="container">
        <SectionHeading
          kicker="ECONOMY"
          title="Economy at a Glance"
          text={economy.intro}
        />

        {economy.sectors?.length ? (
          <div className="place-overviewGrid">
            {economy.sectors.map((sector) => (
              <article key={sector.title} className="place-overviewCard">
                <h3 className="place-overviewTitle">{sector.title}</h3>
                <p className="place-overviewText">{sector.text}</p>
              </article>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}

function GroupedSection({
  id,
  kicker,
  title,
  text,
  groups,
  variant = "default",
}) {
  const validGroups = Object.entries(groups || {}).filter(
    ([, items]) => Array.isArray(items) && items.length
  );

  if (!validGroups.length) return null;

  return (
    <section id={id} className="place-section">
      <div className="container">
        <SectionHeading kicker={kicker} title={title} text={text} />

        <div className="place-groupStack">
          {validGroups.map(([groupName, items]) => (
            <div key={groupName} className="place-groupBlock">
              <h3 className="place-groupTitle">{groupName}</h3>
              <div className="place-cardGrid">
                {items.map((item) => (
                  <GenericCard key={item.name} item={item} variant={variant} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MarketsSection({ markets }) {
  if (!markets?.length) return null;

  const featured = markets.find((item) => item.featured);
  const rest = markets.filter((item) => !item.featured);

  return (
    <section id="markets" className="place-section place-sectionAlt">
      <div className="container">
        <SectionHeading
          kicker="MARKETS & SHOPPING"
          title="Markets & Shopping"
          text="From major market districts to curated retail stops."
        />

        {featured ? (
          <div className="place-featureBlock">
            <div className="place-featureHeader">
              <div>
                <div className="place-featureKicker">FEATURED MARKET</div>
                <h3 className="place-featureTitle">{featured.name}</h3>
              </div>
              {featured.category ? (
                <span className="place-featureMeta">{featured.category}</span>
              ) : null}
            </div>

            {featured.shortDescription ? (
              <p className="place-featureText">{featured.shortDescription}</p>
            ) : null}

            {featured.streets?.length ? (
              <div className="place-streetGrid">
                {featured.streets.map((street) => (
                  <article key={street.name} className="place-streetCard">
                    <h4>{street.name}</h4>
                    <p>{street.description}</p>
                  </article>
                ))}
              </div>
            ) : null}

            <PracticalNotes notes={featured.practicalNotes} />
          </div>
        ) : null}

        {rest.length ? (
          <div className="place-cardGrid">
            {rest.map((item) => (
              <GenericCard key={item.name} item={item} />
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}

function FoodSection({ restaurants }) {
  if (!restaurants?.length) return null;

  const grouped = restaurants.reduce((acc, item) => {
    const key = item.category || item.cuisine || "More Places";
    if (!acc[key]) acc[key] = [];
    acc[key].push(item);
    return acc;
  }, {});

  return (
    <GroupedSection
      id="food"
      kicker="FOOD & RESTAURANTS"
      title="Where to Eat"
      text="A flexible layout for curated dining picks, from local classics to rooftop spots."
      groups={grouped}
    />
  );
}

function NightlifeSection({ nightlife }) {
  const groups = {
    "Rooftop Bars": nightlife?.rooftops || [],
    Clubs: nightlife?.clubs || [],
    "Pubs & Live Music": nightlife?.pubs || [],
    Casinos: nightlife?.casinos || [],
  };

  const hasNightlife = Object.values(groups).some((items) => items.length);
  if (!hasNightlife && !nightlife?.tips?.length) return null;

  return (
    <section id="nightlife" className="place-section">
      <div className="container">
        <SectionHeading
          kicker="NIGHTLIFE"
          title="After Dark"
          text="Skimmable nightlife content grouped by type."
        />

        {hasNightlife ? (
          <div className="place-groupStack">
            {Object.entries(groups).map(([name, items]) =>
              items.length ? (
                <div key={name} className="place-groupBlock">
                  <h3 className="place-groupTitle">{name}</h3>
                  <div className="place-cardGrid">
                    {items.map((item) => (
                      <GenericCard key={item.name} item={item} />
                    ))}
                  </div>
                </div>
              ) : null
            )}
          </div>
        ) : null}

        {nightlife?.tips?.length ? (
          <div className="place-tipBox">
            <h3 className="place-tipTitle">Nightlife Tips</h3>
            <ul className="place-noteList">
              {nightlife.tips.map((tip, index) => (
                <li key={`night-tip-${index}`}>{tip}</li>
              ))}
            </ul>
          </div>
        ) : null}
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
          text="Useful travel notes that help set expectations before arriving."
        />

        <div className="place-practicalGrid">
          {items.map((item, index) => (
            <article key={index} className="place-practicalCard">
              {typeof item === "string" ? (
                <p>{item}</p>
              ) : (
                <>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </>
              )}
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

  const pageSections = useMemo(() => {
    if (!place) return [];

    return [
      hasItems(place.overview) && { href: "#overview", label: "Overview" },
      hasItems(place.highlights) && { href: "#highlights", label: "Things to See" },
      hasItems(place.history?.periods) && { href: "#history", label: "History" },
      hasItems(place.today) && { href: "#today", label: "Today" },
      hasItems(place.districts) && { href: "#districts", label: "Districts" },
      hasItems(place.economy?.sectors) && { href: "#economy", label: "Economy" },
      hasItems(place.museums) && { href: "#museums", label: "Museums" },
      hasItems(place.religiousSites) && { href: "#religious", label: "Religious Sites" },
      hasItems(place.markets) && { href: "#markets", label: "Markets" },
      hasItems(place.beaches) && { href: "#beaches", label: "Beaches" },
      hasItems(place.restaurants) && { href: "#food", label: "Food" },
      hasItems(place.nightlife) && { href: "#nightlife", label: "Nightlife" },
      hasItems(place.hotels) && { href: "#hotels", label: "Hotels" },
      hasItems(place.practicalInfo) && { href: "#practical", label: "Practical Info" },
    ].filter(Boolean);
  }, [place]);

  if (!place) {
    return <NotFoundState />;
  }

  return (
    <div className="place-page">
      <NavBar />
      <HeroSection place={place} />
      <AnchorNav sections={pageSections} />
      <QuickOverview overview={place.overview} />

      <CardGridSection
        id="highlights"
        kicker="HIGHLIGHTS"
        title={`Top Things to See in ${place.name}`}
        text="The main places casual visitors usually want to browse first."
        items={place.highlights}
        variant="highlight"
      />

      <HistorySection history={place.history} />
      <TodaySection today={place.today} />
      <DistrictsSection districts={place.districts} />
      <EconomySection economy={place.economy} />

      <CardGridSection
        id="museums"
        kicker="MUSEUMS"
        title="Museums"
        text="A separate section for museums, so they do not get buried inside general attractions."
        items={place.museums}
      />

      <GroupedSection
        id="religious"
        kicker="RELIGIOUS SITES"
        title="Religious Sites"
        text="Grouped by faith to reflect the city’s cultural and spiritual diversity more clearly."
        groups={{
          Buddhist: place.religiousSites?.buddhist || [],
          Hindu: place.religiousSites?.hindu || [],
          Christian: place.religiousSites?.christian || [],
          Muslim: place.religiousSites?.muslim || [],
        }}
      />

      <MarketsSection markets={place.markets} />

      <CardGridSection
        id="beaches"
        kicker="BEACHES"
        title="Beaches & Coastal Spots"
        text="A short section that sets expectations clearly: promenade and sunset in the city, better swimming nearby."
        items={place.beaches}
      />

      <FoodSection restaurants={place.restaurants} />
      <NightlifeSection nightlife={place.nightlife} />

      <CardGridSection
        id="hotels"
        kicker="PLACES TO STAY"
        title="Hotels & Places to Stay"
        text="A dedicated stay section that works for luxury, boutique, budget, and family-friendly options."
        items={place.hotels}
      />

      <PracticalInfo items={place.practicalInfo} />
      <Footer />
    </div>
  );
}