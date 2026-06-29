import { Component } from '@angular/core';

@Component({
  selector: 'app-game',
  imports: [],
  templateUrl: './game.html',
  styleUrl: './game.css',
})
export class Game {
  choices = ['Rock', 'Paper', 'Scissors']

  playerChoice = '';
  computerChoice = '';
  result = '';
  playerScore: number = 0;
  computerScore: number = 0;

  play(choice: string){
    this.playerChoice = choice;
    const random = Math.floor(Math.random()*3);
    this.computerChoice = this.choices[random]
    this.checkWinner()
    }
  checkWinner(){
    if(this.playerChoice === this.computerChoice){
      this.result = "Draw"
      return;
    }
    if(this.playerChoice === 'Rock' && this.computerChoice === 'Scissors' || (this.playerChoice === 'Paper' && this.computerChoice === "Rock" || (this.playerChoice === 'Scissors' && this.computerChoice === 'Paper'))){
      this.result = 'You Win!';
      this.playerScore++;
    }else{
      this.result = 'Computer Wins';
      this.computerScore++;
    }
  }

  reset(){
    this.playerChoice="";
    this.computerChoice="";
    this.result="";
    this.playerScore=0;
    this.computerScore=0;
  }

}
