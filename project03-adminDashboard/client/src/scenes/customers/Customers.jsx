import Header from '@/components/Header';
import DataTable from './table/DataTable';


function Customers() {
  return (
    <>
      <Header title={"Customers"} subtitle={"List of customers"} />
      <DataTable />
    </>
  )
}

export default Customers;