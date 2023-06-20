import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private nameSubject: Subject<string> = new Subject<string>();
  name$: Observable<string> = this.nameSubject.asObservable();

  setField(value: string): void {
    this.nameSubject.next(value);
  }
  constructor() { }
}
