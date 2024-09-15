import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "@tanstack/react-query";
import axiosInstance from "@/lib/config/axiosInstance";
import { toast } from "react-toastify";
import Container from "@/components/Container";
import Input from "@/components/Input";
import Label from "@/components/Label";
import Button from "@/components/Button";
import Error from "@/components/Error";
import { useState } from "react";

function BookAppointment() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { data: doctors, isLoading: loadingDoctors } = useQuery({
    queryKey: ["doctors-list"],
    queryFn: async () => {
      const response = await axiosInstance.get("/doctor/list");
      return response.data.data;
    },
  });

  const { mutate } = useMutation({
    mutationFn: (data) => axiosInstance.post("/patient/book-appointment", data),
    onSuccess: () => {
      toast.success("Appointment booked successfully!");
      reset();
    },
    onError: (error) => {
      toast.error(`Error booking appointment: ${error.message}`);
    },
    onSettled: () => {
      setIsSubmitting(false);
    },
  });

  const onSubmit = (data) => {
    setIsSubmitting(true);
    mutate(data);
  };

  return (
    <Container>
      <h2 className="text-2xl font-bold font-serif text-center text-black dark:text-white mb-6">
        Book Appointment
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <Label>Date</Label>
          <Input
            type="date"
            placeholder="Select date"
            bg="bg-gray-100"
            rounded={false}
            {...register("date", { required: "Date is required" })}
          />
          <Error message={errors["date"]?.message} />
        </div>

        <div className="mb-4">
          <Label>Time</Label>
          <Input
            type="time"
            placeholder="Select time"
            bg="bg-gray-100"
            rounded={false}
            {...register("time", { required: "Time is required" })}
          />
          <Error message={errors["time"]?.message} />
        </div>

        <div className="mb-4">
          <Label>Doctor</Label>
          <select
            className={`w-full bg-gray-100 dark:bg-gray-900 dark:text-white p-2 border border-gray-300  focus:outline-none pl-4  rounded-md`}
            {...register("doctorId", { required: "Please select a doctor" })}
          >
            <option value="">Select a doctor</option>
            {loadingDoctors ? (
              <option>Loading doctors...</option>
            ) : (
              doctors?.map((doctor) => (
                <option key={doctor.id} value={doctor.id}>
                  Dr. {doctor.name}
                </option>
              ))
            )}
          </select>
          <Error message={errors["doctorId"]?.message} />
        </div>

        <div className="mb-4">
          <Label>Purpose</Label>
          <select
            className={`w-full bg-gray-100 dark:bg-gray-900 dark:text-white p-2 border border-gray-300  focus:outline-none pl-4  rounded-md`}
            {...register("purpose", {
              required: "Purpose is required",
            })}
          >
            <option value="" >
              Select a purpose
            </option>
            <option value="Checkup">Checkup</option>
            <option value="Consultation">Consultation</option>
            <option value="Follow-Up">Follow-Up</option>
            <option value="Test">Test</option>
            <option value="Emergency">Emergency</option>
            <option value="Vaccination">Vaccination</option>
            <option value="Other">Other</option>
          </select>
          <Error message={errors["purpose"]?.message} />
        </div>

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Booking..." : "Book Appointment"}
        </Button>
      </form>
    </Container>
  );
}

export default BookAppointment;

