// loginUser function to handle POST request to backend server
async function loginUser(username, password) {
  try {
    const response = await fetch('http://localhost:3000/login', {
      method: 'POST',
      credentials: 'include', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }), 
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Login failed');
    }
   
    // Parse the response as JSON
    const data = await response.json();
    console.log('Login success, response data:', data); 
    sessionStorage.setItem('accessToken', data.accessToken);
    sessionStorage.setItem('userId', data.id);  
    sessionStorage.setItem('role', data.roli);  
    sessionStorage.setItem('userName', data.username); 
    // Redirect based on role
    console.log('Login successful, redirecting...');
    console.log('User ID:', sessionStorage.getItem('userId'));
    console.log('Role:', sessionStorage.getItem('role'));
    console.log('Access Token:', sessionStorage.getItem('accessToken'));
    
    if (data.roli === 'admin') {
      window.location.href = '/html/admin-panel.html';
    } else if (data.roli === 'punetor') {
      window.location.href = '/html/dashboard.html';
    }
     else {
      window.location.href = '/html/login.html';  // If something goes wrong, force login page.
    }
    
  } catch (error) {
    console.error('Error during login:', error);
    alert('Gabim gjatë kyçjes: ' + error.message);
  }
  console.log('SessionStorage:', {
    accessToken: sessionStorage.getItem('accessToken'),
    userId: sessionStorage.getItem('userId'),
    role: sessionStorage.getItem('role'),
    userName: sessionStorage.getItem('userName')
  });
  
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
