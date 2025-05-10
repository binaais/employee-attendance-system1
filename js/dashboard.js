document.addEventListener('DOMContentLoaded', () => {
  try {
    console.log('Checking sessionStorage on dashboard page...');
    const userId = sessionStorage.getItem('userId');
    const role = sessionStorage.getItem('role');

    console.log('userId:', userId);
    console.log('role:', role);

    if (userId || (role== 'punetor')) {
    
      window.location.href = '/html/dashboard.html';
      return;
    }

    const btnApplyLeave = document.getElementById('applyLeaveBtn');
    if (btnApplyLeave) {
      btnApplyLeave.addEventListener('click', () => {
        window.location.href = 'leave-application.html';
      });
    }

  } catch (err) {
    console.error('Caught an error during dashboard script:', err);
    alert('Error: ' + err.message); // show popup for easier catching
  }
});
