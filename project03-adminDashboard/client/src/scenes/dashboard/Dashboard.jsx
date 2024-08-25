import Header from "@/components/Header";
import GridLayout from "./GridLayout";
import { GridItem } from "./GridLayout";
import LineCharts from "./charts/LineCharts";
import PieCharts from "./charts/PieCharts";
import TransactionLists from "./charts/TransactionList";
import DataBox from "./DataBox";

function Dashboard() {
  return (
    <>
      <Header title="Dashboard" subtitle="This is a dashboard." />
      <GridLayout>
        <GridItem area="a">
          <DataBox dataName={"Total Customer"} data={25} percentage={10} />
        </GridItem>
        <GridItem area="b">
          <DataBox dataName={"Daily Sales"} data={250} percentage={4} />
        </GridItem>
        <GridItem area="c">
          <DataBox dataName={"Monthly Sales"} data={2500} percentage={4} />
        </GridItem>
        <GridItem area="d">
          <DataBox dataName={"Yearly Sales"} data={22505} percentage={23} />
        </GridItem>
        <GridItem area="lineChart">
          <LineCharts />
        </GridItem>
        <GridItem area="transactionTable">
          <TransactionLists />
        </GridItem>
        <GridItem area="pieChart">
          <PieCharts />
        </GridItem>
      </GridLayout>
    </>
  );
}

export default Dashboard;
