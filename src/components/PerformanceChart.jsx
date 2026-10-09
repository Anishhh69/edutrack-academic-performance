import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import "./PerformanceChart.css";

const performanceData = [
  {
    month: "Jan",
    performance: 72,
  },
  {
    month: "Feb",
    performance: 74,
  },
  {
    month: "Mar",
    performance: 75,
  },
  {
    month: "Apr",
    performance: 77,
  },
  {
    month: "May",
    performance: 76,
  },
  {
    month: "Jun",
    performance: 79,
  },
  {
    month: "Jul",
    performance: 81,
  },
  {
    month: "Aug",
    performance: 78,
  },
  {
    month: "Sep",
    performance: 82,
  },
];
function PerformanceChart() {
  return (
    <div className="performance-chart">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={performanceData}
          margin={{
            top: 10,
            right: 10,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
          />

          <XAxis
            dataKey="month"
            tick={{ fontSize: 11 }}
            axisLine={false}
            tickLine={false}
          />

          <YAxis
            domain={[60, 90]}
            tick={{ fontSize: 11 }}
            axisLine={false}
            tickLine={false}
          />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="performance"
            stroke="#2563EB"
            strokeWidth={3}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default PerformanceChart;