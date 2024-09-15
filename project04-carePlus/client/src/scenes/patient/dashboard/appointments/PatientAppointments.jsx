import { useMemo, useState } from "react";
import { NavLink } from "react-router-dom";
import { useTable } from "react-table";
import { toast } from "react-toastify";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { COLUMNS as columnDefinition } from "./columns";
import axiosInstance from "@/lib/config/axiosInstance";
import Container from "@/components/Container";
import LoadingPage from "@/components/LoadingPage";
import ErrorResponse from "@/components/ErrorResponse";


function PatientAppointments() {
  const [isCancelling, setIsCancelling] = useState(false);
  const [isReschedulling, setIsReschedulling] = useState(false);
  const queryClient = useQueryClient();

  const {
    data: appointmentsList,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["appointments"],
    queryFn: async () => {
      const response = await axiosInstance.get("/patient/appointments/list");
      return response.data.data;
    },
  });

  const {mutate: cancelAppointment} = useMutation({
    mutationFn: (appointmentId) => axiosInstance.post('/patient/appointments/cancel', appointmentId),
    onSuccess: () => {
      toast.success("Appointment cancelled successfully!");
      queryClient.invalidateQueries('appointments')
    },
    onError: (error) => {
      toast.error(`Error cancel appointment: ${error.message}`);
    },
    onSettled: () => {
      setIsCancelling(false)
    }
  })

  function handleReschedule(rowData) {
    console.log("Rescheduling:", rowData);
    
  }
  function handleCancel(rowData) {
    if(confirm("are you sure! you want to cancel the appointment")){
      setIsCancelling(true)
      cancelAppointment({id: rowData.id});
    }
  } 

  const COLUMNS = columnDefinition({ handleReschedule, handleCancel, isCancelling, isReschedulling });
  const columns = useMemo(() => COLUMNS, []);
  const memoizeData = useMemo(() => appointmentsList || [], [appointmentsList]);

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

  return (
    <Container>
      <div className="flex justify-end mb-4">
        <NavLink
          to="/patient"
          className="text-white px-4 py-1 rounded mr-1 bg-green-500 hover:bg-green-600"
        >
          Add New Appointment
        </NavLink>
      </div>
      <table {...getTableProps()} className="w-full border-collapse">
        <thead>
          {headerGroups.map((headerGroup, i) => (
            <tr
              key={i}
              {...headerGroup.getHeaderGroupProps()}
              className="bg-blue-100 text-gray-700"
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
            return (
              <tr key={row.id} {...row.getRowProps()} className={row.original.status === "Cancelled" ? "opacity-50" : ""}>
                {row.cells.map((cell) => {
                  const { key, ...rest } = cell.getCellProps();
                  return (
                    <td key={key} {...rest} className="border p-2 ">
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

export default PatientAppointments;
