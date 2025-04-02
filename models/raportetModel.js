export class Raportet {
    constructor(raportID, lejetTotal, pjesemarrjaTotale, vitiMuaji) {
      this.raportID = raportID;
      this.lejetTotal = lejetTotal;
      this.pjesemarrjaTotale = pjesemarrjaTotale;
      this.vitiMuaji = vitiMuaji;
    }
  
    ruajRaportet() {
      console.log(`Raporti për ${this.vitiMuaji} u ruajt.`);
    }
  }
  