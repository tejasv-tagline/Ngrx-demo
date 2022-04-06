import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  public counter:number=0;

  constructor() { }

  ngOnInit(): void {
  }

  public onIncrement():void{
    this.counter++;
  }

  public onDecrement():void{
    this.counter--;
  }

  public onReset():void{
    this.counter=0;
  }

}
