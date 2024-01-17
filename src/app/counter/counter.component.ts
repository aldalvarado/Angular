import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h3>Counter: {{counter}} </h3>
  <button (click)="IncreaseBy(1)" >+1</button>
  <button (click)="Reset()" >Reset</button>
  <button (click)="IncreaseBy(-1)" >-1</button>`,
  standalone: true,
})

export class CounterComponent{
  public counter: number = 10;
  IncreaseBy(value: number): void {
    this.counter += value;
  }
  Reset() {
    this.counter = 10;
  }
}
