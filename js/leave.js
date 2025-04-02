// js/leave.js
document.getElementById('leaveForm').addEventListener('submit', async (event) => {
  event.preventDefault(); 
  const leaveType = document.getElementById('leaveType').value;
  const startDate = document.getElementById('startDate').value;
  const endDate = document.getElementById('endDate').value;
  const reason = document.getElementById('reason').value;
  const employeeId = 123;  
  await applyForLeave(employeeId, leaveType, startDate, endDate, reason);
});
export async function applyForLeave(employeeId, leaveType, startDate, endDate, reason) {
  try {
    const response = await fetch('http://localhost:3000/api/leave/apply', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        punetori_id: employeeId,
        lloji_lejes: leaveType,
        data_fillimit: startDate,
        data_mbarimit: endDate,
        arsyeja: reason
      })
    });

    const result = await response.json();

    if (result.success) {
      alert(' Kërkesa për leje u dërgua me sukses!');
    } else {
      alert(' Dështoi dërgimi i kërkesës për leje.');
    }
  } catch (err) {
    console.error(err);
    alert(' Gabim gjatë dërgimit të kërkesës.');
  }
}
export async function getLeaveStatus(employeeId) {
  try {
    const response = await fetch(`http://localhost:3000/api/leave/status/${employeeId}`);
    const data = await response.json();

    if (!data || data.length === 0) {
      alert('Nuk ka leje të regjistruara.');
    } else {
      let result = '📋 Lejet e tua:\n';
      data.forEach(l => {
        result += ` ${l.lloji_lejes} (${l.data_fillimit} - ${l.data_mbarimit}) → ${l.statusi}\n`;
      });
      alert(result);
    }
  } catch (err) {
    console.error(err);
    alert(' Gabim gjatë marrjes së lejeve.');
  }
}
