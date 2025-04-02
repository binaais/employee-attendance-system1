export class Pjesemarrja {
    constructor(pjesemarrjaID, punetoriID, data, kohaHyrjes, kohaDaljes) {
      this.pjesemarrjaID = pjesemarrjaID;
      this.punetoriID = punetoriID;
      this.data = data;
      this.kohaHyrjes = kohaHyrjes;
      this.kohaDaljes = kohaDaljes;
    }
  
    ruajHyrjen() {
      console.log(`Hyrja u ruajt për punëtorin ID ${this.punetoriID}`);
    }
  
    ruajDaljen() {
      console.log(`Dalja u ruajt për punëtorin ID ${this.punetoriID}`);
    }
  }
  