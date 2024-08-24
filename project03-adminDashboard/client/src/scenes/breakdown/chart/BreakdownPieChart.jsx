import { PieChart, Pie, Tooltip, Cell } from "recharts";
import useGetSalesByCategory from "../hooks/useGetSalesByCategory";
import LoadingPage from "@/components/LoadingPage";
import ErrorResponse from "@/components/ErrorResponse";

function BreakdownPieChart() {
  const { data, isLoading, isError, error } = useGetSalesByCategory();

  const formatedData = data?.map((item) => ({
    ...item,
    total_sales: parseFloat(item.total_sales)
  }));

  const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#d0ed57"];

  const renderLabel = ({ cx, cy, midAngle, outerRadius, name }) => {
    const RADIAN = Math.PI / 180;
    const radius = outerRadius + 10;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="#FFFF00"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
        fontSize={12}
      >
        {name}
      </text>
    );
  };

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError) {
    return <ErrorResponse error={error} />;
  }

  return (
    <PieChart width={900} height={630}>
      <Pie
        data={formatedData}
        dataKey="total_sales"
        nameKey="category_name"
        cx="65%"
        cy="50%"
        outerRadius={200}
        fill="#82ca9d"
        label={renderLabel}
      >
        {formatedData?.map((_, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip
        contentStyle={{
          backgroundColor: "rgba(255, 255, 255, 0.6)",
          border: "1px solid #cccccc",
        }}
        itemStyle={{ color: "#333" }}
        cursor={{ fill: "rgba(0, 0, 0, 0.1)" }}
      />
    </PieChart>
  );
}

export default BreakdownPieChart;
