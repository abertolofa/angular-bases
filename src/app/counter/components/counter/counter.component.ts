import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
   <h3>
    Counter: {{counter}}
  </h3>
  <button (click)="increaseBy(1)">+1</button>
  <button (click)="reset()">Reset</button>
  <button (click)="increaseBy(-1)">-1</button>
  `
})

export class CounterComponent {
  public defaultNumber : number = 10;
  public counter: number = this.defaultNumber;

  increaseBy(value : number): void{
     this.counter += value;
  }
  reset(): void{
   this.counter = this.defaultNumber
  }


}
