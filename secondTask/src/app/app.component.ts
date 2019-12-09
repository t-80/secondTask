import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'secondTask';

  isRunningOut: boolean;

  timeLeft: number = 5;
  isRunning: boolean = false;
  buttonText: string = "Start";
  interval;

  titleProperty: string = "Title";

  something: boolean = false;

  timer() {
    if (this.isRunning) {
      this.pauseTimer();
    } else {
      this.timeLeft === 0 ? this.resetTimer() : this.startTimer();
    }
  }

  startTimer() {
    this.isRunning = true;
    this.buttonText = "Pause";
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      }
      else {
        this.buttonText = "Reset";
        this.isRunning = false;
      }
    }, 1000)
  }

  pauseTimer() {
    this.isRunning = false;
    this.buttonText = "Start";
    clearInterval(this.interval);
  }

  resetTimer() {
    clearInterval(this.interval);
    this.timeLeft = 10;
    this.buttonText = "Start";
  }

  magic(inpu : boolean){
    this.something = inpu;
     console.log(inpu);
  }
}

