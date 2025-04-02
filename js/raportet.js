// js/raportet.js

import { Report } from './models/raportetModel.js';

const reports = [
  new Report(1, 101, 'Prill 2025', 18, 2),
  new Report(2, 102, 'Prill 2025', 20, 0),
  new Report(3, 103, 'Prill 2025', 16, 4),
];

// Shfaq raportet në UI
export function generateReportUI() {
  const container = document.getElementById('report-container');
  if (!container) return;

  container.innerHTML = '<h2>Raportet Mujore të Punëtorëve</h2>';

  reports.forEach((r) => {
    const div = document.createElement('div');
    div.classList.add('report-card');
    div.innerHTML = `
      <p><strong>Punëtori ID:</strong> ${r.employeeId}</p>
      <p><strong>Muaji:</strong> ${r.month}</p>
      <p><strong>Ditë prezente:</strong> ${r.attendanceDays}</p>
      <p><strong>Ditë leje:</strong> ${r.leaveDays}</p>
      <hr />
    `;
    container.appendChild(div);
  });
}

// Nëse është e lidhur direkt në raportet.html
document.addEventListener('DOMContentLoaded', () => {
  generateReportUI();
});