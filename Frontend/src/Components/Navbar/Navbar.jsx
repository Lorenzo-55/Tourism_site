//src/Components/Navbar/Navbar.jsx

import { useEffect, useRef, useState } from "react";
import { MdOutlineSearch } from "react-icons/md";
import "./NavBar.css";
import { useLanguage } from "../../Context/LanguageContext.jsx";

const menuData = {
  places: ["Lorem ipsum", "Dolor sit amet", "Consectetur", "Adipiscing elit"],
  things: ["Lorem ipsum", "Sed do eiusmod", "Tempor incididunt", "Ut labore"],
  stay: ["Lorem ipsum", "Beach villas", "Eco lodges", "City hotels"],
};

function Dropdown({ label, items }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);

  useEffect(() => {
    const onDocClick = (e) => {
      if (!rootRef.current) return;
      if (!rootRef.current.contains(e.target)) setOpen(false);
    };

    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  return (
    <div
      ref={rootRef}
      className={`nav-dd ${open ? "open" : ""}`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className="nav-link nav-dd-btn"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        type="button"
      >
        {label} <span className="nav-caret" aria-hidden="true">▾</span>
      </button>

      <div className="nav-dd-menu" role="menu">
        {items.map((t, i) => (
          <a
            key={i}
            className="nav-dd-item"
            href="#"
            role="menuitem"
            tabIndex={open ? 0 : -1}
          >
            {t}
          </a>
        ))}
      </div>
    </div>
  );
}

export default function NavBar() {
  const [hidden, setHidden] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const lastY = useRef(0);
  const ticking = useRef(false);
  const searchRef = useRef(null);
  const searchInputRef = useRef(null);

  useEffect(() => {
    lastY.current = window.scrollY || 0;

    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;

      window.requestAnimationFrame(() => {
        const y = window.scrollY || 0;
        const delta = y - lastY.current;

        if (Math.abs(delta) > 6) {
          if (delta > 0 && y > 72) setHidden(true);
          if (delta < 0) setHidden(false);
          lastY.current = y;
        }

        ticking.current = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onDocClick = (e) => {
      if (!searchRef.current) return;
      if (!searchRef.current.contains(e.target)) {
        setSearchOpen(false);
      }
    };

    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  return (
    <header className={`nav-wrap ${hidden ? "nav-hidden" : ""}`}>
      <nav className="nav" aria-label="Primary">
        <a className="nav-brand" href="#">
          <span className="nav-mark" aria-hidden="true">
            <span className="mark-dot" />
            <span className="mark-swoosh" />
          </span>
          <span className="nav-brand-text">Sri Lanka</span>
        </a>

        <div className="nav-center">
          <Dropdown label="Places to go" items={menuData.places} />
          <Dropdown label="Things to do" items={menuData.things} />
          <Dropdown label="Stay" items={menuData.stay} />
        </div>

        <div className="nav-right">
          <div className="nav-dd">
            <button className="nav-link nav-dd-btn" type="button" aria-haspopup="listbox">
              {language.toUpperCase()} <span className="nav-caret" aria-hidden="true">▾</span>
            </button>

            <div className="nav-dd-menu" role="listbox">
              <button className="nav-dd-item" type="button" role="option" onClick={() => setLanguage("en")}>
                EN
              </button>
              <button className="nav-dd-item" type="button" role="option" onClick={() => setLanguage("fr")}>
                FR
              </button>
              <button className="nav-dd-item" type="button" role="option" onClick={() => setLanguage("it")}>
                IT
              </button>
              <button className="nav-dd-item" type="button" role="option" onClick={() => setLanguage("si")}>
                සිං
              </button>
              <button className="nav-dd-item" type="button" role="option" onClick={() => setLanguage("ta")}>
                TA
              </button>
            </div>
          </div>

          <div
            ref={searchRef}
            className={`nav-search-wrap ${searchOpen ? "open" : ""}`}
          >
            <button
              className="nav-search-toggle"
              type="button"
              aria-label="Open search"
              aria-expanded={searchOpen}
              onClick={() => setSearchOpen((v) => !v)}
            >
              <MdOutlineSearch />
            </button>

            {searchOpen && (
              <div className="nav-search-panel">
                <input
                  ref={searchInputRef}
                  className="nav-search-input"
                  type="text"
                  placeholder="Search"
                  aria-label="Search"
                />
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}