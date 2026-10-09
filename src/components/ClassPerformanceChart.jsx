import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { teacherSubjects } from "../data/mockData";

import "./ClassPerformanceChart.css";

function ClassPerformanceChart() {
  const chartData = teacherSubjects.map((item) => ({
    subject: item.subject,
    performance: Number(item.performance.replace("%", "")),
  }));

  return (
    <div className="class-performance-chart">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={chartData}
          margin={{ top: 10, right: 10, left: 0, bottom: 20 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
          />

          <XAxis
            dataKey="subject"
            tick={{ fontSize: 11 }}
            axisLine={false}
            tickLine={false}
            interval={0}
            angle={-20}
            textAnchor="end"
          />

          <YAxis
            domain={[0, 100]}
            tick={{ fontSize: 11 }}
            axisLine={false}
            tickLine={false}
          />

          <Tooltip
            formatter={(value) => [`${value}%`, "Performance"]}
          />

          <Bar
            dataKey="performance"
            fill="#2563EB"
            radius={[6, 6, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ClassPerformanceChart;