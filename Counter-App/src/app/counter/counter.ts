import {Component} from '@angular/core';

@Component({
             selector: 'app-counter',
             imports: [],
             templateUrl: './counter.html',
             styleUrl: './counter.scss'
           }) export class Counter {
  counter: number = 5;

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }

  getCounterStatus(): CounterStatus {
    return {
      status: this.counter ===
        0 ?
          'neutral' :
          this.counter <
          0 ?
            'negative' :
            'positive'
    };
  }
}

export interface CounterStatus {
  status: 'neutral' | 'positive' | 'negative';
}
