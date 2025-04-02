export async function registerCheckIn(employeeId) {
  const response = await fetch('/api/attendance/check-in', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ punetori_id: employeeId })
  });

  const data = await response.json();
  if (data.success) {
    const timestamp = new Date().toLocaleString();
    alert(`Hyrja u regjistrua për punëtorin ID ${employeeId} në ${timestamp}`);
  } else {
    alert('Dështoi regjistrimi i hyrjes.');
  }
}

export async function registerCheckOut(employeeId) {
  const response = await fetch('/api/attendance/check-out', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ punetori_id: employeeId })
  });

  const data = await response.json();
  if (data.success) {
    const timestamp = new Date().toLocaleString();
    alert(`Dalja u regjistrua për punëtorin ID ${employeeId} në ${timestamp}`);
  } else {
    alert('Dështoi regjistrimi i daljes.');
  }
}
