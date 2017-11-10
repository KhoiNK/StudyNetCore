import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/share';
import { Observer } from 'rxjs/Observer';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class GlobalService {

    public _sysmess = new Subject<string>();
  
    constructor() {
    }

    globalMess$ = this._sysmess.asObservable();

    changeMess(key: string) {
        this._sysmess.next(key);
    }

}
