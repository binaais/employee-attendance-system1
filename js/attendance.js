document.addEventListener('DOMContentLoaded', () => {
  const userId = sessionStorage.getItem('userId');
  const role = sessionStorage.getItem('role');

  
  if (!userId || role !== 'employee') {
    window.location.href = 'login.html';
  }


  const btnCheckIn = document.getElementById('registerCheckInBtn');
  if (btnCheckIn) {
    btnCheckIn.addEventListener('click', () => {
      const time = new Date().toLocaleString();
      alert(`Check-In i suksesshëm!\nKoha: ${time}`);
    });
  }

  // Funksionaliteti i butonit për regjistrimin e Check-Out
  const btnCheckOut = document.getElementById('registerCheckOutBtn');
  if (btnCheckOut) {
    btnCheckOut.addEventListener('click', () => {
      const time = new Date().toLocaleString();
      alert(`Check-Out i suksesshëm!\nKoha: ${time}`);
    });
  }

  const btnApplyLeave = document.getElementById('applyLeaveBtn');
  if (btnApplyLeave) {
    btnApplyLeave.addEventListener('click', () => {
      
      window.location.href = 'leave-application.html'; 
    });
  }

  
});