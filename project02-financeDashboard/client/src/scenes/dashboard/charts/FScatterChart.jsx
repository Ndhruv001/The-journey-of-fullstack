import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import useKpiData from "@/state/hooks/useKpiData";
import ChartHeader from "@/components/ChartHeader";

function FScatterChart() {
  const { data } = useKpiData();

  return (
    <>
      <ChartHeader
        title="Revenue and Expense"
        subtitle="Last Quarter"
        percentage={4}
      />
      <div style={{ height: "150px" }}>
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart data={data?.data}>
            <XAxis
              dataKey="date" // Adjust based on your data structure
              tickLine={false}
              style={{ fontSize: "10px", color: "#ddd" }}
            />
            <YAxis
              tickLine={false}
              axisLine={{ strokeWidth: "0" }}
              style={{ fontSize: "10px", color: "#ddd" }}
              domain={[100000, 250000]}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "transparent",
                borderColor: "transparent",
              }}
            />
            <Scatter
              name="Revenue"
              dataKey="totalRevenue"
              fill="#6a11cb" // Adjusted to match the dark theme
            />
            <Scatter
              name="Expenses"
              dataKey="totalExpenses"
              fill="#f953c6" // Adjusted to match the dark theme
            />
          </ScatterChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}

export default FScatterChart;
