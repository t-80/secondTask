import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'secondTask';

  interval: number = -1;
  isRunning: boolean = false;
  buttonText: string = "Start";

  titleProperty: string = "Title"

  timer(){
    this.isRunning ? this.start() : this.pause()
  }

  start(){
    this.buttonText = "Pause";
    this.setInterval();
    this.isRunning = true;
    while (this.interval > 0 && this.isRunning){
      this.oneSecondTimeout();
      this.interval -= 1;
    }
  }
  
  pause(){
    this.isRunning = false;
  }

  private setInterval(){
    this.interval = 10;
  }

  clearInterval(){
    this.interval = -1;
  }

  oneSecondTimeout() {
    setTimeout (() => {
      }, 1000);
    }
}

