import OverviewLineChart from "./chart/OverviewLineChart";
import Header from "@/components/Header";

function Overview() {
  return (
    <>
      <Header
        title={"Overview"}
        subtitle={"Overview of general sales and units"}
      />
      <OverviewLineChart />
    </>
  );
}

export default Overview;
