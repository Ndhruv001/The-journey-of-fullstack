import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from "recharts";
import LoadingPage from "@/components/LoadingPage";
import ErrorResponse from "@/components/ErrorResponse";
import useGetDailySales from "../hooks/useGetDailySales";
import SelectionDropdown from '../SelectionDropdown';
import { useState } from 'react';
import { format } from "date-fns";

function OverviewLineChart() {
  const [selectedOption, setSelectedOption] = useState('sales');
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
    <SelectionDropdown selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
      <LineChart
        width={window.innerWidth - 250}
        height={window.innerHeight - 250}
        data={formattedData}
        margin={{ top: 10, right: 30, left: 20, bottom: 10 }}
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
        <Legend  />
        <Line
          type="monotone"
          dataKey={selectedOption === 'units' ? "total_units" : "total_sales"}
          stroke="#8884d8"
          strokeWidth={2}
        />
      </LineChart>
    </>
  );
}

export default OverviewLineChart;
