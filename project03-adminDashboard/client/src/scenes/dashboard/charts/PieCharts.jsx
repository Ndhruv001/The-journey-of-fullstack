import useGetSalesByCategory from "../../breakdown/hooks/useGetSalesByCategory";
import { PieChart, Pie, Tooltip, Cell, Legend } from "recharts";
import LoadingPage from "@/components/LoadingPage";
import ErrorResponse from "@/components/ErrorResponse";

function PieCharts() {
  const { data, isLoading, isError, error } = useGetSalesByCategory();

  const formatedData = data?.map((item) => ({
    ...item,
    total_sales: parseFloat(item.total_sales),
  }));

  const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#d0ed57"];

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError) {
    return <ErrorResponse error={error} />;
  }

  return (
    <PieChart width={350} height={400}>
      <Pie
        data={formatedData}
        dataKey="total_sales"
        nameKey="category_name"
        cx="55%"
        cy="50%"
        outerRadius={90}
        fill="#82ca9d"
        label
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
      <Legend />
    </PieChart>
  );
}

export default PieCharts;
