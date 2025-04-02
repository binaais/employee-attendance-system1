// app.js

import { loginUser } from './auth.js';
import { scanCard } from './attendance.js';
import { renderDashboard } from './views/dashboardView.js';

function loginUser(username, password) {
  if (username === 'admin' && password === 'admin123') {
    alert('Login i suksesshëm!');
    renderDashboard(); // kjo zëvendëson gjithë përmbajtjen e <main>
  }
}

// Inicimi kur DOM është gati
document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  const scanCardBtn = document.getElementById('scanCardBtn');

  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const username = document.getElementById('username').value.trim();
      const password = document.getElementById('password').value.trim();
      loginUser(username, password);
    });
  }

  if (scanCardBtn) {
    scanCardBtn.addEventListener('click', () => {
      scanCard();
    });
  }
});