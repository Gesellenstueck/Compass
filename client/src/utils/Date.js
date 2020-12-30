export default function getDate() {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let today = new Date();
  let weekNum = today.getDay();

  let weekday = days[weekNum];

  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let day = today.getDate();

  let onejan = new Date(today.getFullYear(), 0, 1);

  const date = `${weekday}, ${day}.${month}.${year}`;

  const weekNumber = Math.ceil(
    ((today - onejan) / 86400000 + onejan.getDay() + 1) / 7
  );

  return { date, weekNumber };
}
