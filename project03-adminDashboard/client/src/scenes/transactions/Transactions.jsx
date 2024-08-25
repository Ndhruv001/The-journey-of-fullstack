import Header from "@/components/Header";
import DataTable from "./table/DataTable";

function Transactions() {
  return (
    <>
      <Header title={"Transactions"} subtitle={"Entire list of transactions"} />
      <DataTable />
    </>
  );
}

export default Transactions;
