import AAreaChart from "./charts/AAreaChart";
import BLineChart from "./charts/BLineChart";
import CBarChart from "./charts/CBarChart";
import DLineChart from "./charts/DLineChart";
import EPieChart from "./charts/EPieChart";
import FScatterChart from "./charts/FScatterChart";
import GridLayout, { GridItem } from "./GridLayout";

function Dashboard() {
  return (
    <GridLayout>
      <GridItem area="AAreaChart">
        <AAreaChart />
      </GridItem>
      <GridItem area="BLineChart">
        <BLineChart />
      </GridItem>
      <GridItem area="CBarChart">
        <CBarChart />
      </GridItem>
      <GridItem area="DLineChart">
        <DLineChart />
      </GridItem>
      <GridItem area="EPieChart">
        <EPieChart />
      </GridItem>
      <GridItem area="FScatterChart">
        <FScatterChart />
      </GridItem>
      <GridItem area="ProductList">No List To Display</GridItem>
      <GridItem area="ExpenseList">No List To Display</GridItem>
      <GridItem area="DataVisualization">No Data Found</GridItem>
      <GridItem area="TotalSumary">No Data</GridItem>
    </GridLayout>
  );
}

export default Dashboard;
