document.addEventListener('DOMContentLoaded', () => {
  const userId = sessionStorage.getItem('userId');
  const role = sessionStorage.getItem('role');

  if (!userId || role !== 'employee') {
    window.location.href = 'login.html';
  }

  const btnCheckIn = document.getElementById('registerCheckInBtn');
  if (btnCheckIn) {
    btnCheckIn.addEventListener('click', async () => {
      try {
        const response = await fetch('http://localhost:3001/api/attendance', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ userId, type: 'check-in' })
        });

        const data = await response.json();

        if (data.success) {
          alert('Check-In i suksesshëm!');
        } else {
          alert('Dështoi Check-In.');
        }
      } catch (error) {
        console.error('Gabim gjatë Check-In:', error);
      }
    });
  }

  const btnCheckOut = document.getElementById('registerCheckOutBtn');
  if (btnCheckOut) {
    btnCheckOut.addEventListener('click', async () => {
      try {
        const response = await fetch('http://localhost:3001/api/attendance', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ userId, type: 'check-out' })
        });

        const data = await response.json();

        if (data.success) {
          alert('Check-Out i suksesshëm!');
        } else {
          alert('Dështoi Check-Out.');
        }
      } catch (error) {
        console.error('Gabim gjatë Check-Out:', error);
      }
    });
  }

  const btnApplyLeave = document.getElementById('applyLeaveBtn');
  if (btnApplyLeave) {
    btnApplyLeave.addEventListener('click', () => {
      window.location.href = 'leave-application.html';
    });
  }
});
