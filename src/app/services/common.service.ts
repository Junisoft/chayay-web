import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  // private subject = new Subject<any>();
  private subject = new BehaviorSubject<boolean>(true);

  constructor() { }

  sendData(show: boolean) {
    this.subject.next(show);
  }

  clearData() {
    this.subject.next(false);
  }

  getData(): Observable<any> {
    return this.subject.asObservable();
  }

}
