// js/leave.js

let leaveRequests = [];

export function applyForLeave(employeeId, leaveType, startDate, endDate, reason) {
  const request = {
    id: leaveRequests.length + 1,
    employeeId,
    leaveType,
    startDate,
    endDate,
    reason,
    status: 'Pending'
  };
  leaveRequests.push(request);
  alert('Kërkesa për leje u dërgua me sukses!');
}

export function getLeaveStatus(employeeId) {
  const myLeaves = leaveRequests.filter(l => l.employeeId === employeeId);
  if (myLeaves.length === 0) {
    alert('Nuk keni aplikime për leje.');
  } else {
    let result = 'Lejet tuaja:\n';
    myLeaves.forEach(l => {
      result += `📌 ${l.leaveType} (${l.startDate} - ${l.endDate}) → ${l.status}\n`;
    });
    alert(result);
  }
}
