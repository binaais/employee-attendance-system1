// loginUser function to handle POST request to backend server
async function loginUser(username, password) {
  try {
    const response = await fetch('http://localhost:3000/login', {
      method: 'POST',
      credentials: 'include', // Allows cookies to be sent with the request
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }), // Send username and password in body
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Login failed');
    }

    // Parse the response as JSON
    const data = await response.json();
    console.log('Login success, response data:', data); 

    // Temporarily store the access token in sessionStorage
    sessionStorage.setItem('accessToken', data.accessToken);

    // Redirect based on role
    if (data.roli === 'admin') {
      window.location.href = 'admin-panel.html';
    } else {
      window.location.href = 'dashboard.html';
    }

  } catch (error) {
    console.error('Error during login:', error);
    alert('Gabim gjatë kyçjes: ' + error.message);
  }
}

// Add event listener once the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('loginForm');

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault(); // Prevent the form from refreshing the page

      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;

      console.log('Username:', username);
      console.log('Password:', password);

      // Call the loginUser function
      await loginUser(username, password);
    });
  } else {
    console.error('Login form not found!');
  }
});
