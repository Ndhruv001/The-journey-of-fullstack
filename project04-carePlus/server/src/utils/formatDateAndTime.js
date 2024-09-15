import { format, differenceInYears } from "date-fns";

function formatDateForMySQL(date) {
  return format(new Date(date), "yyyy-MM-dd");
}

function formatTimeForMySQL(time) {
  return time.length === 5 ? `${time}:00` : time;
}

function formatTimeForClient(time) {
  // Using a dummy date (1970-01-01) to combine with time string
  const dateAndTime = `1970-01-01T${time}Z`;
  return format(new Date(dateAndTime), "hh:mm a"); 
}

function formatDateForClient(date) {
  return format(new Date(date), "EEE, dd-MMM-yy");
}


function calculateAge(dob) {
  return differenceInYears(new Date(), new Date(dob));
}

export {
  formatDateForMySQL,
  formatTimeForMySQL,
  formatDateForClient,
  formatTimeForClient,
  calculateAge
};
