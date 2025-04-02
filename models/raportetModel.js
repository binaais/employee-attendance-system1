export class Report {
  constructor(id, employeeId, month, attendanceDays, leaveDays) {
    this.id = id;
    this.employeeId = employeeId;
    this.month = month;
    this.attendanceDays = attendanceDays;
    this.leaveDays = leaveDays;
  }

  summary() {
    return `Raport për ${this.month}: ${this.attendanceDays} ditë prezencë, ${this.leaveDays} ditë leje.`;
  }
}