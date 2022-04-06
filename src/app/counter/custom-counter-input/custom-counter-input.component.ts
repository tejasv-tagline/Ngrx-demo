import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { customDecrement, customIncrement } from '../state/counter.action';
import { counterState } from '../state/counter.state';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.scss']
})
export class CustomCounterInputComponent implements OnInit {

  public value!: number;

  constructor(private store: Store<{ counter: counterState }>) { }

  ngOnInit(): void {
  }

  public onAdd(param:string): void {
    if(param==='add'){
      this.store.dispatch(customIncrement({ counter: this.value }));
    }else{
      this.store.dispatch(customDecrement({ counter: this.value }));
    }
  }
}
