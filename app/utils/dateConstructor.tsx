export default function dateConstructor() {
  const today = new Date();
  const year = String(today.getFullYear()).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate() - 2).padStart(2, "0"); // newsApi's "recent news" is yesterday's news

  const dateString = `${year}-${month}-${day}`;

  // Create an array of the last 5 days
  const dateArray = [];
  for (let i = 0; i < 5; i++) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    const year = String(date.getFullYear()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String((date.getDate() - 1)).padStart(2, "0");
    const dateString = `${year}-${month}-${day}`;
    dateArray.push(dateString);
  }
  

  const dateObject = {
    'today': dateArray[0],
    'yesterday': dateArray[1],
    'twoDaysAgo': dateArray[2],
    'threeDaysAgo': dateArray[3],
  }

  return dateObject;
}
