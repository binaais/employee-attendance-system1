import { loginUser as loginAPI } from './auth.js';
import { registerCheckIn, registerCheckOut } from './attendance.js';
import { applyForLeave, getLeaveStatus } from './leave.js';
import { generateReportUI } from './raportet.js';
import { loginUser } from './auth.js';

const form = document.getElementById('loginForm');
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const result = await loginUser(username, password);

  if (result.success) {
    sessionStorage.setItem('userId', result.userId);
    sessionStorage.setItem('role', result.role);
    window.location.href = 'dashboard.html'; // Redirect to dashboard
  } else {
    alert('Login failed. Please check your credentials.');
  }
});

window.registerCheckIn = async () => {
  const user = JSON.parse(localStorage.getItem('loggedInUser'));
  if (user) await registerCheckIn(user.id);
};

window.registerCheckOut = async () => {
  const user = JSON.parse(localStorage.getItem('loggedInUser'));
  if (user) await registerCheckOut(user.id);
};

window.getLeaveStatus = async () => {
  const user = JSON.parse(localStorage.getItem('loggedInUser'));
  if (user) await getLeaveStatus(user.id);
};

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('leaveForm');
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const user = JSON.parse(localStorage.getItem('loggedInUser'));
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

// ========== Raport ==========
document.addEventListener('DOMContentLoaded', () => {
  if (window.location.pathname.includes('raportet.html')) {
    generateReportUI();
  }
});

// ========== Logout ==========
window.logout = () => {
  localStorage.clear();
  sessionStorage.clear();
  window.location.href = 'login.html';
};  