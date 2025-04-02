export async function registerCheckIn(userId) {
  const res = await fetch('http://localhost:3000/api/attendance/check-in', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ punetori_id: userId })
  });
  const data = await res.json();
  alert(data.success ? '✅ Hyrja u regjistrua!' : ' Gabim në regjistrim');
}

export async function registerCheckOut(userId) {
  const res = await fetch('http://localhost:3000/api/attendance/check-out', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ punetori_id: userId })
  });
  const data = await res.json();
  alert(data.success ? '✅ Dalja u regjistrua!' : ' Gabim në regjistrim');
}