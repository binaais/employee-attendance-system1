export class Administratori {
    constructor(adminID, emri) {
      this.adminID = adminID;
      this.emri = emri;
      this.lejet = [];
    }
  
    menagjoPunetoret(punetoret) {
      console.log('Menaxhimi i punëtorëve:', punetoret);
    }
  
    krijoRaporte(lejetTotale, pjesemarrjaTotale, vitiMuaji) {
      return new Raportet(null, lejetTotale, pjesemarrjaTotale, vitiMuaji);
    }
  
    konfirmoLejet(leje, statusiRi) {
      leje.konfirmoLejet(statusiRi);
    }
  
    shikoHyrjet(pjesemarrjet) {
      pjesemarrjet.forEach(p => console.log(p));
    }
  
    shikoDaljet(pjesemarrjet) {
      pjesemarrjet.forEach(p => console.log(p));
    }
  }
  