import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import StatCard from "../components/StatCard";
import SectionCard from "../components/SectionCard";
import PerformanceChart from "../components/PerformanceChart";
import { dashboardStats } from "../data/mockData";
import DataTable from "../components/DataTable";
import { recentReports } from "../data/mockData";

import {
  Users,
  GraduationCap,
  TrendingUp,
  CheckCircle,
} from "lucide-react";

import "./Dashboard.css";

function Dashboard() {
  const icons = [
    <Users size={18} />,
    <GraduationCap size={18} />,
    <TrendingUp size={18} />,
    <CheckCircle size={18} />,
  ];
  const recentReportColumns = [
  {
    key: "student",
    label: "Student",
  },
  {
    key: "id",
    label: "Student ID",
  },
  {
    key: "performance",
    label: "Performance",
  },
  {
    key: "status",
    label: "Status",
    type: "status",
  },
];

  return (
    <div className="app-layout">
      <Sidebar />

      <main className="main-content">
        <Header
          title="Academic Performance Dashboard"
          subtitle="Monitor and analyze academic performance"
        />

        <div className="dashboard-content">
          {/* Statistics */}

          <div className="stats-grid">
            {dashboardStats.map((stat, index) => (
              <StatCard
                key={stat.title}
                title={stat.title}
                value={stat.value}
                change={stat.change}
                icon={icons[index]}
              />
            ))}
          </div>

          {/* Dashboard Sections */}

          <div className="dashboard-grid">
            <SectionCard title="Performance Overview">
  <PerformanceChart />
</SectionCard>

            <SectionCard title="Recent Reports">
  <DataTable
    columns={recentReportColumns}
    data={recentReports}
  />
</SectionCard>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;