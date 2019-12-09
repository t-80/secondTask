import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit, OnChanges {

  @Input() titleProperty: string

  @Input() isRunning: boolean

  @Output() isRunningOut = new EventEmitter<boolean>()

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    const runningChanges = changes['isRunning'];
    this.isRunningOut.emit(this.isRunning);
  }

  ngOnInit() {
  }
}
