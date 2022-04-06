import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { counterState } from '../state/counter.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.scss']
})
export class CounterOutputComponent implements OnInit {
  public counter$!: Observable<counterState>;

  constructor(private store: Store<{ counter: counterState }>) { }

  ngOnInit(): void {
    this.counter$=this.store.select('counter');
  }
}
