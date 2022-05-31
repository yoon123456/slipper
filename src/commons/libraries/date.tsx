

//   const date = new Date(UTC + nineHours);
//   date.setDate(date.getDate() + add);

//   const yyyy = String(date.getFullYear());
//   const mm = String(date.getMonth() + 1).padStart(2, "0");
//   const dd = String(date.getDate()).padStart(2, "0");
//   const h = String(date.getHours()).padStart(2, "0");
//   const m = String(date.getMinutes()).padStart(2, "0");
//   const s = String(date.getSeconds()).padStart(2, "0");
//   const ms = String(date.getMilliseconds()).padStart(3, "0");

//   return `${yyyy}-${mm}-${dd}-${h}:${m}:${s}:${ms}`;
// };
export const getDate = (add = 0) => {
  const time = new Date();
  // const UTC = time.getTime() + time.getTimezoneOffset() * 60 * 1000;

  // const date = new Date(UTC);
  // date.setDate(UTC);sa

  const yyyy = String(time.getFullYear());
  const mm = String(time.getMonth() + 1).padStart(2, "0");
  const dd = String(time.getDate()).padStart(2, "0");
  const h = String(time.getHours()).padStart(2, "0");
  const m = String(time.getMinutes()).padStart(2, "0");
  const s = String(time.getSeconds()).padStart(2, "0");
  const ms = String(time.getMilliseconds()).padStart(3, "0");

  return `${yyyy}-${mm}-${dd}T${h}:${m}`;
};
