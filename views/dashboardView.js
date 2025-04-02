// dashboardView.js

import { Punetori } from '../models/punetoriModel.js';
import { Administratori } from '../models/administratoriModel.js';
import { applyForLeave, getLeaveStatus } from '../js/leave.js';

// Simulim perdoruesish te kyçur
let currentUser = new Punetori(1, 'Blina', 'blina', '123', 'punetor', '12345');
// let currentUser = new Administratori(1, 'Entela'); // test per admin
//punetoriID,emri ,username,password,roli,numriiKarteles

export function renderDashboard() {
  const main = document.querySelector('main');
  main.innerHTML = '';

  const title = document.createElement('h2');
  title.textContent = `Miresevjen, ${currentUser.emri}!`;
  main.appendChild(title);

  if (currentUser.roli === 'punetor') {
    renderEmployeeDashboard(main);
  } else {
    renderAdminDashboard(main);
  }
}

function renderEmployeeDashboard(container) {
  const btnAttendance = document.createElement('button');
  btnAttendance.textContent = 'Regjistro Hyrjen';
  btnAttendance.onclick = () => {
    alert('Hyrja u regjistrua me sukses!');
  };

  const btnApplyLeave = document.createElement('button');
  btnApplyLeave.textContent = 'Apliko per Leje';
  btnApplyLeave.onclick = () => {
    const leje = currentUser.kerkoLeje('Pushim', '2025-04-10', '2025-04-12');
    applyForLeave(currentUser.punetoriID, leje.llojiLejes, leje.dataFillimit, leje.dataMbarimit, 'Pushim personal');
  };

  const btnCheckLeaves = document.createElement('button');
  btnCheckLeaves.textContent = 'Shiko Statusin e Lejeve';
  btnCheckLeaves.onclick = () => {
    getLeaveStatus(currentUser.punetoriID);
  };

  container.appendChild(btnAttendance);
  container.appendChild(btnApplyLeave);
  container.appendChild(btnCheckLeaves);
}
    
function renderAdminDashboard(container) {
  const btnConfirmLeave = document.createElement('button');
  btnConfirmLeave.textContent = 'Konfirmo Lejet';
  btnConfirmLeave.onclick = () => {
    alert('Ketu admini do te shfaqe dhe konfirmoje lejet.');
  };

  const btnViewReports = document.createElement('button');
  btnViewReports.textContent = 'Shfaq Raportet';
  btnViewReports.onclick = () => {
    alert('Raportet mujore do te shfaqen ketu.');
  };

  container.appendChild(btnConfirmLeave);
  container.appendChild(btnViewReports);
}
