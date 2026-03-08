// src/components/Breadcrumbs/Breadcrumbs.jsx
import { Link } from "react-router-dom";
import "./Breadcrumbs.css";

export default function Breadcrumbs({ items = [] }) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <span key={item.label} className="breadcrumbs-item">
            {isLast ? (
              <span className="breadcrumbs-current">{item.label}</span>
            ) : (
              <Link to={item.to} className="breadcrumbs-link">
                {item.label}
              </Link>
            )}

            {!isLast && <span className="breadcrumbs-separator"> &gt; </span>}
          </span>
        );
      })}
    </nav>
  );
}