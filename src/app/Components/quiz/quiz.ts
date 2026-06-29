import { Component } from '@angular/core';

@Component({
  selector: 'app-quiz',
  imports: [],
  templateUrl: './quiz.html',
  styleUrl: './quiz.css',
})
export class Quiz {
  gamenotFinised = false;
  currentQuestion = 0;
  score = 0;
  selectedAnswer=""

  question: any[] = [
    {
      question:'What is your Name',
      options:["Alamin","Sheikh"],
      answer: 'Alamin'
    },
    {
      question:'What is your Name 2',
      options:["Alamin2","Sheikh2"],
      answer: 'Alamin2'
    }
  ]

  selectAnswer(opton:string){
    this.selectedAnswer = opton;
  }
  nextQuestion(){
    if(this.selectedAnswer === this.question[this.currentQuestion].answer){
      this.score++;
    }
    this.selectedAnswer = '';
    this.currentQuestion++;

    if(this.currentQuestion >= this.question.length){
      this.gamenotFinised = true;
    }
  }
  restart(){
    this.currentQuestion=0;
    this.score = 0;
    this.selectedAnswer = "";
    this.gamenotFinised = false;
  }
}
