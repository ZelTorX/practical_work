// Get the current date and time
const now = new Date();
const hours = now.getHours();
const minutes = now.getMinutes();
const date = now.toLocaleDateString();

// Update the time and date elements
document.getElementById('time').textContent = `${hours}:${minutes}`;
document.getElementById('date').textContent = date;
