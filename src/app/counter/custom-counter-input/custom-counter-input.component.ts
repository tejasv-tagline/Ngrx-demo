import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { changeName, customDecrement, customIncrement } from '../state/counter.action';
import { getCounter, getName } from '../state/counter.selector';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.scss']
})
export class CustomCounterInputComponent implements OnInit {

  public value!: number;
  public name!: string;
  public name$!: Observable<string>;

  constructor(private store: Store<{ counter: number }>) { }

  ngOnInit(): void {
    // this.store.select(getName).subscribe((data: any) => {
    //   this.name = data
    // })
    this.name$=this.store.select(getName)
  }

  public onAdd(param: string): void {
    if (param === 'add') {
      this.store.dispatch(customIncrement({ counter: this.value }));
    } else {
      this.store.dispatch(customDecrement({ counter: this.value }));
    }
  }

  public onNameChange(): void {
    this.store.dispatch(changeName());
  }
}
