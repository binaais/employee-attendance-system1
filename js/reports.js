document.addEventListener('DOMContentLoaded', () => {
  const confirmBtn = document.getElementById('confirmLeaves');
  const manageBtn = document.getElementById('manageEmployees');

  if (confirmBtn) {
    confirmBtn.addEventListener('click', () => {
      alert('Leaves confirmed by admin!');
    });
  }

  if (manageBtn) {
    manageBtn.addEventListener('click', () => {
      alert('Redirecting to employee management page...');
      window.location.href = 'manage-employees.html'; 
    });
  }
});
