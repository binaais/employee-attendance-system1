// js/attendance.js
import { Pjesemarrja } from '../models/pjesemarrjaModel.js';
import { Punetori } from '../models/punetoriModel.js';

export function registerCheckIn(userId) {
  const data = new Date().toISOString().split('T')[0];
  const ora = new Date().toTimeString().split(' ')[0];

  // Simulimi i punëtorit nga databaza
  const punetori = new Punetori(userId, "Emri", "username", "pass", "employee", "12345");
  const hyrja = punetori.regjistroHyrjen(data, ora);
  hyrja.ruajHyrjen();
}

export function registerCheckOut(userId) {
  const oraDaljes = new Date().toTimeString().split(' ')[0];

  // Shembull: pjesëmarrja do të vijë nga backend në realitet
  const pjesemarrja = new Pjesemarrja(1, userId, "2025-04-02", "08:00:00", null);
  pjesemarrja.ruajDaljen(oraDaljes);
}