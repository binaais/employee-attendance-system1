import { loginUser } from './auth.js';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('loginForm');

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;

      try {
        const response = await fetch('http://localhost:3001/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ username, password })
        });

        const result = await response.json();

        if (result.success) {
          sessionStorage.setItem('userId', result.userId);
          sessionStorage.setItem('role', result.role);

          if (result.role.toLowerCase() === 'admin') {
            window.location.replace('admin-panel.html');
          } else {
            window.location.replace('dashboard.html');
          }
        } else {
          alert('Kyçja dështoi. Kontrolloni kredencialet.');
        }
      } catch (error) {
        console.error('Gabim gjatë login:', error);
      }
    });
  } else {
    console.error('Login form not found!');
  }
});

