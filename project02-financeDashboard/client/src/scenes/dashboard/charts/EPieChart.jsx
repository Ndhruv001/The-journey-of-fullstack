import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import useKpiData from "@/state/hooks/useKpiData";
import ChartHeader from "@/components/ChartHeader";

function EPieChart() {
  const { data } = useKpiData();

  // Extract the profit data for the PieChart
  const profitData = data?.data?.map((item, index) => ({
    name: `Quarter ${index + 1}`, // Naming the slices by quarter
    value: parseFloat(item.totalProfit), // Parsing profit as float
  }));

  const COLORS = ["#4CAF50", "#FF9800", "#2196F3", "#E91E63", "#FFEB3B"]; // Bright colors for contrast

  return (
    <>
      {/* <ChartHeader title="Profit Distribution" subtitle="By Quarter" percentage={4} /> */}
      <div style={{ height: "110px" }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={profitData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={50}
              fill="#8884d8"
              label={({ name, value }) => `${name}: $${value.toLocaleString()}`}
              labelStyle={{ fill: "#ddd" }} // Label text color
            >
              {profitData?.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "transeparent",
                borderColor: "#transeparent",
                color: "white",
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}

export default EPieChart;
