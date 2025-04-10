import { loginUser } from './auth.js';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('loginForm');

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;

      console.log('Username:', username);
      console.log('Password:', password);

      const result = await loginUser(username, password);
      console.log('Login result:', result);

      if (result.success) {
        sessionStorage.setItem('userId', result.userId);
        sessionStorage.setItem('role', result.role);
        sessionStorage.setItem('cardID', result.cardID); 

        if (result.role.toLowerCase() === 'admin') {
          window.location.replace('admin-panel.html');
        } else {
          window.location.replace('dashboard.html');
        }
      } else {
        alert('Kyçja dështoi. Kontrolloni kredencialet.');
      }
    });
  } else {
    console.error('Login form not found!');
  }
});
