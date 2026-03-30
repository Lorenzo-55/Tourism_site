import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./HorizontalScrollCards.css";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

export default function HorizontalScrollCards({
  items,
  kicker,
  title,
  text, // regular text between title and cards
  sectionClassName = "",
  collapsible = false, // enable/disable show-hide button
  defaultOpen = false,
  toggleLabelOpen = "Click here for more details",
  toggleLabelClose = "Hide details",
  align = "left",
  titleStyle = "default" 
}) {
  const [isOpen, setIsOpen] = useState(collapsible ? defaultOpen : true);

  const areaRef = useRef(null);
  const listRef = useRef(null);
  const dragState = useRef({
    isDown: false,
    isDragging: false,
    startX: 0,
    scrollLeft: 0,
  });

  useEffect(() => {
    const handleMouseUp = () => {
      dragState.current.isDown = false;
      dragState.current.isDragging = false;
      areaRef.current?.classList.remove("is-dragging");
    };

    window.addEventListener("mouseup", handleMouseUp);
    return () => window.removeEventListener("mouseup", handleMouseUp);
  }, []);

  const handleMouseDown = (e) => {
    if (e.target.closest("a, button")) return;

    const list = listRef.current;
    if (!list) return;

    dragState.current.isDown = true;
    dragState.current.isDragging = false;
    dragState.current.startX = e.clientX;
    dragState.current.scrollLeft = list.scrollLeft;
  };

  const handleMouseMove = (e) => {
    const list = listRef.current;
    const area = areaRef.current;
    if (!list || !area || !dragState.current.isDown) return;

    const dx = e.clientX - dragState.current.startX;

    if (!dragState.current.isDragging && Math.abs(dx) > 6) {
      dragState.current.isDragging = true;
      area.classList.add("is-dragging");
    }

    if (!dragState.current.isDragging) return;

    e.preventDefault();
    list.scrollLeft = dragState.current.scrollLeft - dx;
  };

  const handleMouseLeave = () => {
    dragState.current.isDown = false;
    dragState.current.isDragging = false;
    areaRef.current?.classList.remove("is-dragging");
  };

  return (
    <section className={`horizontal-scroll-cards ${sectionClassName}`}>
      <div className="container">
        <div className="horizontal-scroll-cards__head">
          {kicker && (
            <div className="horizontal-scroll-cards__kicker">{kicker}</div>
          )}

          {title && <h2 className="horizontal-scroll-cards__title">{title}</h2>}

          {text && <p className="horizontal-scroll-cards__text">{text}</p>}

          {collapsible && (
            <button
              type="button"
              className="horizontal-scroll-cards__toggle"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              {isOpen ? "Hide details" : "Click to see details"}
              {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </button>
          )}
        </div>

        {isOpen && (
          <div
            ref={areaRef}
            className="horizontal-scroll-cards__area"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div ref={listRef} className="horizontal-scroll-cards__list">
              {items.map((item, index) => (
                <div
                  key={item.name || item.title || index}
                  className={`horizontal-scroll-cards__item horizontal-scroll-cards__item--${align}`}
                >
                  {item.image && (
                    <div className="horizontal-scroll-cards__imageWrap">
                      <img
                        src={item.image}
                        alt={item.imageAlt || item.name || item.title || "Card image"}
                        className="horizontal-scroll-cards__image"
                        draggable="false"
                      />
                    </div>
                  )}

                  <div className="horizontal-scroll-cards__summary">
                    <div className="horizontal-scroll-cards__left">
                      <strong
                        className={`horizontal-scroll-cards__name horizontal-scroll-cards__name--${titleStyle}`}
                      >
                        {item.name || item.title}
                      </strong>
                    </div>

                    {item.character && (
                      <span className="horizontal-scroll-cards__type">
                        {item.character}
                      </span>
                    )}
                  </div>

                  <div className="horizontal-scroll-cards__body">
                    {item.bestKnownFor && (
                      <p className="horizontal-scroll-cards__best">
                        <strong>Best known for:</strong> {item.bestKnownFor}
                      </p>
                    )}

                    {item.description &&
                      (Array.isArray(item.description) ? (
                        item.description.map((para, i) => <p key={i}>{para}</p>)
                      ) : (
                        <p>{item.description}</p>
                      ))}

                    
                    {item.info?.text && (
                      <p className="horizontal-scroll-cards__info">
                        {item.info.label && <strong>{item.info.label}: </strong>}
                        {item.info.text}
                      </p>
                    )}

                    {item.tags && (
                      <div className="horizontal-scroll-cards__tags">
                        {item.tags.map((tag, i) => (
                          <span key={i} className="horizontal-scroll-cards__tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {item.button?.label && (
                      <>
                        {item.button.slug && (
                          <Link
                            to={`/places/${item.button.slug}`}
                            className="horizontal-scroll-cards__button"
                            onMouseDown={(e) => e.stopPropagation()}
                          >
                            {item.button.label}
                          </Link>
                        )}

                        {item.button.to?.startsWith("#") && (
                          <a
                            href={item.button.to}
                            className="horizontal-scroll-cards__button"
                            onMouseDown={(e) => e.stopPropagation()}
                          >
                            {item.button.label}
                          </a>
                        )}

                        {item.button.to && !item.button.to.startsWith("#") && (
                          <Link
                            to={item.button.to}
                            className="horizontal-scroll-cards__button"
                            onMouseDown={(e) => e.stopPropagation()}
                          >
                            {item.button.label}
                          </Link>
                        )}

                        {item.button.href && (
                          <a
                            href={item.button.href}
                            className="horizontal-scroll-cards__button"
                            target="_blank"
                            rel="noreferrer"
                            onMouseDown={(e) => e.stopPropagation()}
                          >
                            {item.button.label}
                          </a>
                        )}
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}