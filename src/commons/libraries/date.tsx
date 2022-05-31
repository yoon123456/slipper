export const getDate = (add = 0) => {
  const time = new Date();

  const yyyy = String(time.getFullYear());
  const mm = String(time.getMonth() + 1).padStart(2, "0");
  const dd = String(time.getDate()).padStart(2, "0");
  const h = String(time.getHours()).padStart(2, "0");
  const m = String(time.getMinutes()).padStart(2, "0");
  const s = String(time.getSeconds()).padStart(2, "0");
  const ms = String(time.getMilliseconds()).padStart(3, "0");

  return `${yyyy}-${mm}-${dd}T${h}:${m}`;
};
