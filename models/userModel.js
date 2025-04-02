export class User {
    constructor(id, name, username, password, role, cardId) {
      this.id = id;
      this.name = name;
      this.username = username;
      this.password = password;
      this.role = role;
      this.cardId = cardId;
    }
  
    changePassword(newPassword) {
      this.password = newPassword;
      console.log('Password changed successfully');
    }
  
    getInfo() {
      return `${this.name} (${this.role})`;
    }
  }