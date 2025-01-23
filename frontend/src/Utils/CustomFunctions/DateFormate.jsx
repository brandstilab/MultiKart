export const dateFormate = (date, noTime, showMonth, showMonthTime) => {
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const d = new Date(date);
  var hours = d.getHours();
  var minutes = d.getMinutes();
  var ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = (hours > 9 ? hours : "0" + hours) + ":" + minutes + " " + ampm;
  if (noTime) {
    return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
  } else if (showMonth) {
    return ` ${d.getDate()} ${monthNames[d.getMonth()]} ${d.getFullYear()}`;
  } else if (showMonthTime) {
    return ` ${d.getDate()} ${monthNames[d.getMonth()]} ${d.getFullYear()} ${strTime}`;
  } else {
    return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()} ${strTime}`;
  }
};

export const formatDateForDateRange = (dateData) => {
  const date = new Date(dateData);
  return dateFormate(date.toISOString(), true);
};

export const showMonthWiseDate = (dateData) => {
  const date = new Date(dateData);
  return dateFormate(date.toISOString(), false, true);
};

export const showMonthWiseDateAndTime = (dateData) => {
  const date = new Date(dateData);
  return dateFormate(date.toISOString(), false, false, true);
};
