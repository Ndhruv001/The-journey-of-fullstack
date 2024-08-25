import { AreaChart, Area, XAxis, YAxis, Tooltip, Legend } from "recharts";
import LoadingPage from "@/components/LoadingPage";
import ErrorResponse from "@/components/ErrorResponse";
import useGetDailySales from "../../overview/hooks/useGetDailySales";
import { format } from "date-fns";

function LineCharts() {
  const { data, isLoading, isError, error } = useGetDailySales();

  const formattedData = data?.map((item) => ({
    ...item,
    day: format(new Date(item.day), "dd, MMM, yyyy"),
  }));

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError) {
    return <ErrorResponse error={error} />;
  }

  if (!isError && !isLoading && (!data || data.length === 0)) {
    return (
      <div className="text-white text-lg text-center">No data available</div>
    );
  }

  return (
    <>
      <AreaChart
        width={700}
        height={310}
        data={formattedData}
        margin={{ top: 10, right: 2, left: 2, bottom: 1 }}
      >
        <XAxis dataKey="day" stroke="#cccccc" />
        <YAxis stroke="#cccccc" />
        <Tooltip
          contentStyle={{
            backgroundColor: "transparent",
            border: "red",
          }}
          itemStyle={{ color: "#ffffff" }}
          cursor={{ stroke: "rgba(255, 255, 255, 0.2)" }}
        />
        <Legend />
        <Area
          type="monotone"
          dataKey="total_sales"
          stroke="#8884d8"
          strokeWidth={2}
        />
      </AreaChart>
    </>
  );
}

export default LineCharts;
