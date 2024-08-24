import { useMemo } from "react";
import useGetCustomers from "../hooks/useGetCustomers";
import LoadingPage from "@/components/LoadingPage";
import ErrorResponse from "@/components/ErrorResponse";
import { useTable } from "react-table";
import COLUMNS from "./columns";

function DataTable() {
  const { data, isLoading, isError, error } = useGetCustomers();

  const memoizeData = useMemo(() => data || [], [data]); // Use an empty array as a fallback
  const columns = useMemo(() => COLUMNS, []);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data: memoizeData,
    });

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError) {
    return <ErrorResponse error={error} />;
  }

  if (!isError && !isLoading && (!data || data.length === 0)) {
    return <div className="text-white text-lg text-center">No data available</div>;
  }

  return (
    <table
      {...getTableProps()}
      className="min-w-full bg-gray-900 text-white table-auto rounded-md"
    >
      <thead className="bg-gray-700">
        {headerGroups.map((headerGroup, i) => (
          <tr key={i} {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => {
              const { key, ...rest } = column.getHeaderProps();
              return (
                <th
                  key={key}
                  {...rest}
                  className="px-4 py-2 text-left text-yellow-400"
                >
                  {column.render("Header")}
                </th>
              );
            })}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()} className="bg-gray-800">
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr
              key={row.id}
              {...row.getRowProps()}
              className="hover:bg-gray-700"
            >
              {row.cells.map((cell) => {
                const { key, ...rest } = cell.getCellProps();
                return (
                  <td
                    key={key}
                    {...rest}
                    className="px-4 py-2 border-b border-gray-700"
                  >
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default DataTable;
