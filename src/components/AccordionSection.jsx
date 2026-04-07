import "../styles/AccordionSection.css";

function AccordionSection({ title, isOpen, onToggle, children }) {
  return (
    <div className={`accordian ${isOpen ? "accordion--open" : ""}`}>
      <button
        className="accordion__header"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="accordion__title">{title}</span>
        <span className="accordion__chevron" aria-hidden="true">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M2 5L7 10L12 5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>
      <div className="accordion__body">
        <div className="accordion__content">{children}</div>
      </div>
    </div>
  );
}

export default AccordionSection;
