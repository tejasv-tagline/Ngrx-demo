import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../state/counter.action';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.scss']
})
export class CounterButtonsComponent implements OnInit {

  constructor(private store: Store<{ counter: { counter: number } }>) { }

  ngOnInit(): void {
  }

  public onIncrement(): void {
    this.store.dispatch(increment());
  }

  public onDecrement(): void {
    this.store.dispatch(decrement());
  }

  public onReset(): void {
    this.store.dispatch(reset());
  }

}
