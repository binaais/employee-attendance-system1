document.addEventListener('DOMContentLoaded', () => {
  const userId = sessionStorage.getItem('userId');

  const isFormDisabled = sessionStorage.getItem('leaveFormDisabled') === 'true';
  const form = document.getElementById('leaveForm');
  const submitBtn = document.getElementById('submitLeaveBtn');

  // Nëse është dërguar më herët, blloko formën
  if (isFormDisabled && form) {
    form.querySelectorAll('input, select, textarea').forEach(element => {
      element.disabled = true;
    });
    submitBtn.disabled = true;
    alert("📌 Ju tashmë keni aplikuar për leje.");
    return; // mos vazhdo tutje
  }

  // Kur forma dorëzohet
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const leaveType = document.getElementById('leaveType').value;
      const startDate = document.getElementById('startDate').value;
      const endDate = document.getElementById('endDate').value;
      const reason = document.getElementById('reason').value;

      try {
        const response = await fetch('http://localhost:3001/api/leave', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ userId, leaveType, startDate, endDate, reason })
        });

        const data = await response.json();

        if (data.success) {
          alert('✅ Kërkesa për leje u dërgua me sukses!');

          // Blloko formën pas dërgimit
          form.querySelectorAll('input, select, textarea').forEach(element => {
            element.disabled = true;
          });
          submitBtn.disabled = true;

          // Ruaje statusin në sessionStorage
          sessionStorage.setItem('leaveFormDisabled', 'true');
          form.reset();
        } else {
          alert('❌ Dështoi dërgimi i kërkesës.');
        }
      } catch (error) {
        console.error('Gabim gjatë dërgimit të kërkesës:', error);
        alert('⚠️ Gabim gjatë dërgimit të kërkesës.');
      }
    });
  }
});
