document.addEventListener('DOMContentLoaded', () => {
 
  const isFormDisabled = sessionStorage.getItem('leaveFormDisabled') === 'true';
  const form = document.getElementById('leaveForm');
  const submitBtn = document.getElementById('submitLeaveBtn');

  
  if (isFormDisabled) {
    form.querySelectorAll('input, select, textarea').forEach(element => {
      element.disabled = true; 
    });
    submitBtn.disabled = true; 
    alert("You have already applied for leave.");
  }

  
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const leaveType = document.getElementById('leaveType').value;
      const startDate = document.getElementById('startDate').value;
      const endDate = document.getElementById('endDate').value;
      const reason = document.getElementById('reason').value;

      alert(`Leave Application Sent!\nType: ${leaveType}\nFrom: ${startDate} To: ${endDate}\nReason: ${reason}`);

      
      sessionStorage.setItem('leaveFormDisabled', 'true');
      form.reset();
    });
  }
});
