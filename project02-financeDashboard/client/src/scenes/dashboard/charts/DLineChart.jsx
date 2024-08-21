import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import useMonthlyData from "@/state/hooks/useMonthlyData";
import ChartHeader from "@/components/ChartHeader";

function DLineChart() {
  const { data } = useMonthlyData();

  // Map the backend data to the format expected by Recharts
  const monthlyData = data?.data.map((item) => ({
    month: new Date(item.month).toLocaleString("default", {
      month: "short",
      year: "numeric",
    }), // Format month
    totalSales: item.data.totalSales,
    totalExpenses: item.data.totalExpenses,
  }));

  return (
    <>
      <ChartHeader
        title="Monthly sales and expenses"
        subtitle=""
        percentage={5}
      />
      <div style={{ height: "150px" }}>
        {" "}
        {/* Set minHeight to ensure proper height */}
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={monthlyData}>
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
              dataKey="totalExpenses"
              dot={true}
              stroke="#6a11cb" // Adjusted to match the dark theme
              fillOpacity={1}
              fill="url(#colorRevenue)"
            />
            <Line
              type="monotone"
              dataKey="totalSales"
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

export default DLineChart;
