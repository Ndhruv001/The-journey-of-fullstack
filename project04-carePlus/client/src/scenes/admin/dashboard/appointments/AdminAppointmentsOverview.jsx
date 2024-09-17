import { useMemo } from "react";
import { useTable, useGlobalFilter } from "react-table";
import { useQuery } from "@tanstack/react-query";
import { COLUMNS } from "./columns";
import axiosInstance from "@/lib/config/axiosInstance";
import Container from "@/components/Container";
import LoadingPage from "@/components/LoadingPage";
import ErrorResponse from "@/components/ErrorResponse";
import Searchbar from "@/components/Searchbar";

function AdminAppointmentsOverview() {
  const {
    data: appointmentsList,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["admin-appointments"],
    queryFn: async () => {
      const response = await axiosInstance.get("/admin/appointments/overview");
      return response.data.data;
    },
  });

  const columns = useMemo(() => COLUMNS, []);
  const memoizeData = useMemo(() => appointmentsList || [], [appointmentsList]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state: { globalFilter },
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data: memoizeData,
    },
    useGlobalFilter
  );

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError) {
    return <ErrorResponse error={error} />;
  }

 
  const getStatusColorClass = (status) => {
    switch (status) {
      case "Scheduled":
        return "text-green-600"; 
      case "Cancelled":
        return "text-orange-400"; 
      case "Pending":
        return "text-yellow-500"; 
      case "Rejected":
        return "text-red-600"; 
      case "Completed":
        return "text-blue-600"
      default:
        return ""; 
    }
  };

  return (
    <Container>
      <Searchbar setFilter={setGlobalFilter} filter={globalFilter} />
      <table {...getTableProps()} className="w-full border-collapse">
        <thead>
          {headerGroups.map((headerGroup, i) => (
            <tr
              key={i}
              {...headerGroup.getHeaderGroupProps()}
              className="bg-green-100 text-gray-700"
            >
              {headerGroup.headers.map((column) => {
                const { key, ...rest } = column.getHeaderProps();
                return (
                  <th key={key} {...rest} className="border p-2">
                    {column.render("Header")}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            
            const status = row.original.status; 
            const rowClass = getStatusColorClass(status); 
            return (
              <tr key={row.id} {...row.getRowProps()} className={rowClass}>
                {row.cells.map((cell) => {
                  const { key, ...rest } = cell.getCellProps();
                  return (
                    <td key={key} {...rest} className="border p-2">
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </Container>
  );
}

export default AdminAppointmentsOverview;