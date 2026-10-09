import "./StatCard.css";

function StatCard({ title, value, change, icon, positive = true }) {
  return (
    <div className="stat-card">
      <div className="stat-card-top">
        <div className="stat-card-title">
          {title}
        </div>

        {icon && (
          <div className="stat-card-icon">
            {icon}
          </div>
        )}
      </div>

      <div className="stat-card-value">
        {value}
      </div>

      <div
        className={
          positive
            ? "stat-card-change positive"
            : "stat-card-change negative"
        }
      >
        {change}
      </div>
    </div>
  );
}

export default StatCard;