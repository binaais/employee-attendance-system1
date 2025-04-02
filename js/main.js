// ✅ Main Integration Script - no model classes, pure API interaction

import { loginUser as loginAPI } from './auth.js';
import { registerCheckIn, registerCheckOut } from './attendance.js';
import { applyForLeave, getLeaveStatus } from './leave.js';
import { generateReportUI } from './raportet.js';

// ========== Login Logic ==========
document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const username = document.getElementById('username').value.trim();
      const password = document.getElementById('password').value.trim();

      const result = await loginAPI(username, password);
      // auth.js handles the redirect and storage
    });
  }
});

// ========== Dashboard Logic ==========
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

// ========== Leave Application Logic ==========
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

// ========== Report Page Logic ==========
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