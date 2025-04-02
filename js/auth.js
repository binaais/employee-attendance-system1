// auth.js
export async function loginUser(username, password) {
  try {
    const response = await fetch('http://localhost:3000/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });

    const result = await response.json();

    if (result.success) {
      alert('✅ Kyçja me sukses!');
      localStorage.setItem('loggedInUser', JSON.stringify(result.user));
      window.location.href = 'dashboard.html';
    } else {
      alert('❌ Kredencialet janë të pasakta!');
    }
  } catch (err) {
    console.error(err);
    alert('❌ Gabim në lidhje me serverin!');
  }
}
