const clock = document.getElementById("clock");
function updateclock(event) {
  const date = new Date();
  const month = date.getMonth() + 1;
  const day = String(date.getDate()).padStart(2, "0");
  const hour = String(date.getHours()).padStart(2, "0");
  const minute = String(date.getMinutes()).padStart(2, "0");
  const second = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${month}/${day}\n${hour}:${minute}:${second}`;
}
updateclock();
setInterval(updateclock, 1000);
