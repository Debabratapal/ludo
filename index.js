class Player {
   
    constructor(number) {
        this.player = number;
        this.numberOfCoin = 4;
        this.playingCoin = 0;
        this.numberOfSixes = 0;
        this.currentNumber = 0;
    }

    suffel () {
       let number = Math.round(Math.random() * (6 - 1) + 1);
       if(number === 6) {
           this.numberOfSixes  = this.numberOfSixes + 1;
       }
       this.currentNumber = number;
    }
} 

class Ludo {
    constructor() {
        this.players = [];
        for(let i=0; i<4; i++) {
            this.players.push(new Player(i+1));
        }
        this.currentPlayer = 1;
    }

    play() {
        let player = this.players[this.currentPlayer -1];
        player.suffel();
    }
}

let ludo = new Ludo();
ludo.play();
console.log(ludo);
