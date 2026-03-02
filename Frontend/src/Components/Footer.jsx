import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <div className="brand brand--footer">
            <span className="brand__mark" aria-hidden="true" />
            <span className="brand__text">Isla Aurora</span>
          </div>
          <p className="muted">
            Filler destination copy. Swap with your real brand, routes, and CMS content.
          </p>
        </div>

        <div className="footer__cols">
          <div>
            <p className="footer__title">Explore</p>
            <a href="#places">Places</a>
            <a href="#things">Things to do</a>
            <a href="#stay">Stay</a>
          </div>
          <div>
            <p className="footer__title">Plan</p>
            <a href="#tips">Practical tips</a>
            <a href="#newsletter">Newsletter</a>
            <a href="#top">Back to top</a>
          </div>
        </div>
      </div>

      <div className="container footer__bottom">
        <span className="muted">© {new Date().getFullYear()} Isla Aurora</span>
        <span className="muted">Built with React</span>
      </div>
    </footer>
  );
}