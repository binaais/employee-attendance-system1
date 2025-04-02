// attendance.js

// js/attendance.js

export function registerCheckIn(employeeId) {
  const timestamp = new Date().toLocaleString();
  alert(`Hyrja u regjistrua për punëtorin ID ${employeeId} në ${timestamp}`);
}

export function registerCheckOut(employeeId) {
  const timestamp = new Date().toLocaleString();
  alert(`Dalja u regjistrua për punëtorin ID ${employeeId} në ${timestamp}`);
}
