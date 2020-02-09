const app = require('./app');

class Player {
  constructor(obj) {
      if(typeof obj === 'number') {
          this.player = number;
          this.numberOfCoin = 4;
          this.playingCoin = 0;
          this.numberOfSixes = 0;
          this.currentNumber = 0;

      } else {
         
        this.player = obj.player;
        this.numberOfCoin = obj.numberOfCoin;
        this.playingCoin = obj.playingCoin;
        this.numberOfSixes = obj.numberOfSixes;
        this.currentNumber = obj.currentNumber;
      }
  }

  
  suffel() {
    let number = Math.round(Math.random() * (6 - 1) + 1);
    this.setSixes(number);

    this.currentNumber = number;
  }

  setSixes(number) {
    if (number === 6) {
      this.numberOfSixes = this.numberOfSixes <= 2 ? this.numberOfSixes + 1 : 0;
    }
  }
}

class Ludo {
  constructor() {
    this.players = [];
    if(!this.players.length && !app.readFile().players.length) {
        for (let i = 0; i < 4; i++) {
          this.players.push(new Player(i + 1));
        }
        this.currentPlayer = 1;
    } else {
        
        let previoustPlayers = app.readFile().players;
      
        this.players = [];
        for(let i of previoustPlayers) {
           
            this.players.push(new Player(i));
        }
        this.currentPlayer = app.readFile().currentPlayer;
    }
  }

  play() {
    let player = this.players[this.currentPlayer - 1];
  
    player.suffel();
  }
}

let ludo = new Ludo();
ludo.play();
app.writeFile(ludo);
console.log(ludo);

// app.readFile();
