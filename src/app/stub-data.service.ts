import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { IHeaderNav } from './interfaces/header-nav.interface';

@Injectable({ providedIn: 'root' })
export class StubDataService {
  items: IHeaderNav[] = [
    { id: 1, title: 'home', router: 'home' },
    { id: 2, title: 'about', router: 'about' },
    { id: 3, title: 'contacts', router: 'contacts' },
  ];

  getItems$(): Observable<IHeaderNav[]> {
    return of(this.items).pipe(delay(200));
  }
}
