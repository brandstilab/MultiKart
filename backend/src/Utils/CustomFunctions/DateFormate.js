export const dateFormate = (date, noTime) => {
  const d = new Date(date);
  var hours = d.getHours();
  var minutes = d.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0' + minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return noTime ? `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}` : `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()} ${strTime}`;
};


export const formatDateForDateRange = (dateData) => {
  const date = new Date(dateData);
  return dateFormate(date.toISOString(), true);
};

export const dateSubmitValue = (inputDateString) => {
  const inputDate = new Date(inputDateString);

  const year = inputDate.getFullYear();
  const month = inputDate.getMonth() + 1; // Months are zero-based, so add 1
  const day = inputDate.getDate();
  return `${year}-${month}-${day}`;
};

export const dateWithOnlyMonth = (inputDateString)=>{
  const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];

  const inputDate = new Date(inputDateString);
  const day = inputDate.getUTCDate();
  const month = months[inputDate.getUTCMonth()];
  const year = inputDate.getUTCFullYear();

  return `${day} ${month} ${year}`;
}
// old dateFormate value coomented because it is not used anywhere in codebase it is for my refference 
// export const dateFormate = (date, noTime) => {
//   const d = new Date(date);

//   // Define months array for formatting
//   const months = [
//     "Jan",
//     "Feb",
//     "Mar",
//     "Apr",
//     "May",
//     "Jun",
//     "Jul",
//     "Aug",
//     "Sep",
//     "Oct",
//     "Nov",
//     "Dec",
//   ];

//   // Get the day, month, and year from the Date object
//   const day = d.getDate();
//   const month = months[d.getMonth()];
//   const year = d.getFullYear();

//   if (noTime) {
//     return `${day} ${month} ${year}`;
//   } else {
//     var hours = d.getHours();
//     var minutes = d.getMinutes();
//     var ampm = hours >= 12 ? "pm" : "am";
//     hours = hours % 12;
//     hours = hours ? hours : 12; // the hour '0' should be '12'
//     minutes = minutes < 10 ? "0" + minutes : minutes;
//     var strTime = hours + ":" + minutes + " " + ampm;

//     return `${day} ${month} ${year} ${strTime}`;
//   }
// };