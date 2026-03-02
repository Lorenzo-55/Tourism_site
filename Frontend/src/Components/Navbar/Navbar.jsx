// src/components/NavBar/NavBar.jsx
import { useEffect, useRef, useState } from "react";
import "./NavBar.css";

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
          <a key={i} className="nav-dd-item" href="#" role="menuitem" tabIndex={open ? 0 : -1}>
            {t}
          </a>
        ))}
      </div>
    </div>
  );
}

export default function NavBar() {
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    lastY.current = window.scrollY || 0;

    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;

      window.requestAnimationFrame(() => {
        const y = window.scrollY || 0;
        const delta = y - lastY.current;

        // Ignore tiny jitter
        if (Math.abs(delta) > 6) {
          // Hide on scroll down (after a small threshold), show on scroll up
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

  return (
    <header className={`nav-wrap ${hidden ? "nav-hidden" : ""}`}>
      <nav className="nav" aria-label="Primary">
        {/* Left: Brand */}
        <a className="nav-brand" href="#">
          <span className="nav-mark" aria-hidden="true">
            {/* simple mark with similar warm/teal vibe */}
            <span className="mark-dot" />
            <span className="mark-swoosh" />
          </span>
          <span className="nav-brand-text">Sri Lanka</span>
        </a>

        {/* Center: Links */}
        <div className="nav-center">
          <Dropdown label="Places to go" items={menuData.places} />
          <Dropdown label="Things to do" items={menuData.things} />
          <Dropdown label="Stay" items={menuData.stay} />
        </div>

        {/* Right: Language + Search */}
        <div className="nav-right">
          <div className="nav-dd">
            <button className="nav-link nav-dd-btn" type="button" aria-haspopup="listbox">
              EN <span className="nav-caret" aria-hidden="true">▾</span>
            </button>
            <div className="nav-dd-menu" role="listbox">
              <a className="nav-dd-item" href="#" role="option">EN</a>
              <a className="nav-dd-item" href="#" role="option">සිං</a>
              <a className="nav-dd-item" href="#" role="option">TA</a>
            </div>
          </div>

          <div className="nav-search">
            <span className="nav-search-icon" aria-hidden="true">⌕</span>
            <input
              className="nav-search-input"
              type="text"
              placeholder="Search"
              aria-label="Search"
            />
          </div>
        </div>
      </nav>
    </header>
  );
}