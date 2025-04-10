document.addEventListener('DOMContentLoaded', () => {
  const userId = sessionStorage.getItem('userId');
  const role = sessionStorage.getItem('role');

 
 if (!userId || role !== 'employee') {
    window.location.href = 'login.html';
 }

  
  const userName = sessionStorage.getItem('userName') || 'User';

  

  
  const btnApplyLeave = document.getElementById('applyLeaveBtn');
  if (btnApplyLeave) {
    btnApplyLeave.addEventListener('click', () => {
      
      window.location.href = 'leave-application.html'; 
    });
  }

  
  const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      sessionStorage.clear(); 
      window.location.href = 'login.html'; 
    });
  }
});
