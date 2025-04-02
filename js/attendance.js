// Attendance Logic - Replace sessionStorage with localStorage
window.registerCheckIn = async () => {
  const user = JSON.parse(localStorage.getItem('loggedInUser'));
  if (user) await registerCheckIn(user.id);
};

window.registerCheckOut = async () => {
  const user = JSON.parse(localStorage.getItem('loggedInUser'));
  if (user) await registerCheckOut(user.id);
};

// Leave Application Logic
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('leaveForm');
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const user = JSON.parse(localStorage.getItem('loggedInUser')); // Get from localStorage
      const leaveType = document.getElementById('leaveType').value;
      const startDate = document.getElementById('startDate').value;
      const endDate = document.getElementById('endDate').value;
      const reason = document.getElementById('reason').value;

      if (user) {
        await applyForLeave(user.id, leaveType, startDate, endDate, reason);
      }
    });
  }
});
