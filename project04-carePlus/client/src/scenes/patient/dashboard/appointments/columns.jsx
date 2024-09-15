import Button from "@/components/Button";

const COLUMNS = ({ handleReschedule, handleCancel, isReschedulling, isCancelling }) => [
  {
    Header: "Date",
    accessor: "appointment_date",
  },
  {
    Header: "Time",
    accessor: "appointment_time",
  },
  {
    Header: "Doctor",
    accessor: "doctor_name",
    Cell: ({value}) =>  `Dr. ${value}`
  },
  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "Actions",
    Cell: ({ row }) => (
      <div className="flex justify-center">
        <Button  disabled={row.original.status === 'Cancelled'} onClick={() => handleReschedule(row.original)}>{isReschedulling ? "Saving.." : "Reschedule"}</Button>
        <Button disabled={row.original.status === 'Cancelled'} onClick={() => handleCancel(row.original)} color="red" >{isCancelling ? "Saving.." : "Cancel"}</Button>
      </div>
    ),
  },
];

export  {COLUMNS};
