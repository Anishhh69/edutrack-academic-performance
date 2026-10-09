import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import SectionCard from "../components/SectionCard";
import DataTable from "../components/DataTable";

import { generatedReports } from "../data/mockData";

import "./Reports.css";

function Reports() {
  const reportColumns = [
  { key: "report", label: "Report" },
  { key: "type", label: "Type" },
  { key: "date", label: "Date" },
  { key: "status", label: "Status", type: "status" },
  {
    key: "action",
    label: "View",
    type: "action",
    onClick: (row) => {
      alert(`Opening ${row.report}`);
    },
  },
];

  const reportData = generatedReports.map((report) => ({
    ...report,
    action: "View →",
  }));

  return (
    <div className="app-layout">
      <Sidebar />

      <main className="main-content">
        <Header
          title="Academic Reports"
          subtitle="Generate and analyze academic performance reports"
        />

        <div className="reports-content">

          <SectionCard
            title="Report Filters"
            subtitle="Select the criteria for your report"
          >
            <div className="report-filters">

              <div className="filter-group">
                <label>Report Type</label>
                <select defaultValue="Student Performance">
                  <option>Student Performance</option>
                  <option>Teacher Performance</option>
                  <option>Semester Performance</option>
                </select>
              </div>

              <div className="filter-group">
                <label>Academic Year</label>
                <select defaultValue="2025/26">
                  <option>2025/26</option>
                  <option>2024/25</option>
                </select>
              </div>

              <div className="filter-group">
                <label>Semester</label>
                <select defaultValue="8th Semester">
                  <option>8th Semester</option>
                  <option>7th Semester</option>
                  <option>6th Semester</option>
                </select>
              </div>

              <div className="filter-group">
                <label>Department</label>
                <select defaultValue="Computer Science">
                  <option>Computer Science</option>
                  <option>Information Technology</option>
                  <option>Management</option>
                </select>
              </div>

            </div>

            <button
  className="generate-button"
  onClick={() => alert("Report generated successfully!")}
>
  Generate Report
</button>
          </SectionCard>

          <SectionCard title="Performance Summary">
            <div className="summary-grid">

              <div className="summary-item">
                <span>Students Evaluated</span>
                <strong>156</strong>
              </div>

              <div className="summary-item">
                <span>Average Performance</span>
                <strong>81.4%</strong>
              </div>

              <div className="summary-item">
                <span>Pass Rate</span>
                <strong>94%</strong>
              </div>

            </div>
          </SectionCard>

          <SectionCard title="Generated Reports">
            <DataTable
              columns={reportColumns}
              data={reportData}
            />
          </SectionCard>

        </div>
      </main>
    </div>
  );
}

export default Reports;