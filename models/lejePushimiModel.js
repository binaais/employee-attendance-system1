export class LejePushimi {
    constructor(lejeID, statusi, llojiLejes, dataFillimit, dataMbarimit) {
      this.lejeID = lejeID;
      this.statusi = statusi;
      this.llojiLejes = llojiLejes;
      this.dataFillimit = dataFillimit;
      this.dataMbarimit = dataMbarimit;
    }
  
    konfirmoLejet(statusiRi) {
      this.statusi = statusiRi;
    }
  }
  