// app.js

import { loginUser } from './auth.js';
import { scanCard } from './attendance.js';

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