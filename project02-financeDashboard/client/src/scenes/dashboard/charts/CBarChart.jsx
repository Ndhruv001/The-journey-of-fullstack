import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import useMonthlyData from "@/state/hooks/useMonthlyData";
import ChartHeader from "@/components/ChartHeader";

function CBarChart() {
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
      <ChartHeader title="Revenue month by month" subtitle="" percentage={6} />
      <div style={{ height: "150px" }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={monthlyData}>
            <defs>
              <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
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
              dataKey="month"
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
                color: "white",
                backgroundColor: "transparent",
                borderColor: "transparent",
              }}
            />
            <Bar
              dataKey="totalSales"
              stroke="#6a11cb"
              fillOpacity={1}
              fill="url(#colorSales)"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}

export default CBarChart;
