import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CounterStateService {
  // broadcast mantığı ile çalışır
  counterSubject = new BehaviorSubject<number>(0);
  counterObservable = this.counterSubject.asObservable();

  constructor() {}

  Increment() {
    this.counterSubject.next(this.counterSubject.value + 1);
  }

  Decrement() {
    this.counterSubject.next(this.counterSubject.value - 1);
  }

  IncrementByValue(num: number) {
    this.counterSubject.next(this.counterSubject.value + num);
  }
}
