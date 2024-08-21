import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import useKpiData from "@/state/hooks/useKpiData";
import ChartHeader from "@/components/ChartHeader";

function BLineChart() {
  const { data } = useKpiData();

  return (
    <>
      <ChartHeader
        title="Revenue and Profit"
        subtitle="Last Quarter"
        percentage={6}
      />
      <div style={{ height: "200px" }}>
        {" "}
        {/* Set minHeight to ensure proper height */}
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data?.data}>
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="#6a11cb" // Adjusted to match the dark theme
                  stopOpacity={0.5}
                />
                <stop
                  offset="95%"
                  stopColor="#6a11cb" // Adjusted to match the dark theme
                  stopOpacity={0}
                />
              </linearGradient>
              <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="#f953c6" // Adjusted to match the dark theme
                  stopOpacity={0.5}
                />
                <stop
                  offset="95%"
                  stopColor="#f953c6" // Adjusted to match the dark theme
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
            <XAxis
              tickLine={false}
              style={{ fontSize: "10px", color: "#ddd" }}
            />
            <YAxis
              tickLine={false}
              axisLine={{ strokeWidth: "0" }}
              style={{ fontSize: "10px", color: "#ddd" }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "transparent",
                borderColor: "transparent",
              }}
            />
            <Line
              type="monotone"
              dataKey="totalRevenue"
              dot={true}
              stroke="#6a11cb" // Adjusted to match the dark theme
              fillOpacity={1}
              fill="url(#colorRevenue)"
            />
            <Line
              type="monotone"
              dataKey="totalProfit"
              dot={true}
              stroke="#f953c6" // Adjusted to match the dark theme
              fillOpacity={1}
              fill="url(#colorProfit)"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}

export default BLineChart;
