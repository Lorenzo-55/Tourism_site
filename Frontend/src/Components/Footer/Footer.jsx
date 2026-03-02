// src/Components/Footer/Footer.jsx
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand */}
        <div className="footer-brand">
          <div className="footer-logo">Sri Lanka</div>
          <p className="footer-tagline">
            Discover beauty. Experience culture. Travel beyond the ordinary.
          </p>
        </div>

        {/* Links */}
        <div className="footer-links">
          <div className="footer-column">
            <h4>Explore</h4>
            <a href="#">Places to Go</a>
            <a href="#">Things to Do</a>
            <a href="#">Stay</a>
            <a href="#">Travel Guides</a>
          </div>

          <div className="footer-column">
            <h4>About</h4>
            <a href="#">About Us</a>
            <a href="#">Contact</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms</a>
          </div>

          <div className="footer-column">
            <h4>Follow</h4>
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
            <a href="#">YouTube</a>
            <a href="#">Twitter</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Sri Lanka Tourism. All rights reserved.
      </div>
    </footer>
  );
}