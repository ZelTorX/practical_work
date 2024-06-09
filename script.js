// Get the current date and time
const now = new Date();
const date = now.toLocaleDateString();
// Update the time and date elements
// Update the clock every second
function updateClock() {
  const date = new Date();
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');
  document.getElementById('time').innerHTML = `${hours}:${minutes}:${seconds}`;
  setTimeout(updateClock, 1000);
}
updateClock();
document.getElementById('date').textContent = date;
