import BreakdownPieChart from "./chart/BreakdownPieChart";
import Header from "@/components/Header";

function Breakdown() {
  return (
    <>
      <Header title="Breakdown" subtitle="Breakdown of sales by category." />
      <BreakdownPieChart />
    </>
  );
}

export default Breakdown;
