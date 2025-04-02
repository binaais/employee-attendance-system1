export class Punetori {
    constructor(punetoriID, emri, username, password, roli, numriKarteles) {
      this.punetoriID = punetoriID;
      this.emri = emri;
      this.username = username;
      this.password = password;
      this.roli = roli;
      this.numriKarteles = numriKarteles;
    }
  
    regjistrohu() {
      console.log(`Punëtori ${this.emri} u regjistrua.`);
    }
  
    regjistroHyrjen(data, ora) {
      return new Pjesemarrja(null, this.punetoriID, data, ora, null);
    }
  
    regjistroDaljen(pjesemarrja, oraDaljes) {
      pjesemarrja.kohaDaljes = oraDaljes;
      return pjesemarrja;
    }
  
    kerkoLeje(lloji, fillimi, mbarimi) {
      return new LejePushimi(null, 'Pending', lloji, fillimi, mbarimi);
    }
  }
  