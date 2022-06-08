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

export function currentTime(t: any | number) {
  const date = new Date(t * 1000);
  const hour = String(date.getHours()).padStart(2, "0");
  const minute = String(date.getMinutes()).padStart(2, "0");
  return hour + ":" + minute;
}
