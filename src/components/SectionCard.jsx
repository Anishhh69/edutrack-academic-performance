import "./SectionCard.css";

function SectionCard({ title, subtitle, children, className = "" }) {
  return (
    <section className={`section-card ${className}`}>
      {(title || subtitle) && (
        <div className="section-card-header">
          <div>
            {title && <h2>{title}</h2>}
            {subtitle && <p>{subtitle}</p>}
          </div>
        </div>
      )}

      <div className="section-card-content">
        {children}
      </div>
    </section>
  );
}

export default SectionCard;