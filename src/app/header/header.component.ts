import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { StubDataService } from '../stub-data.service';
import { IHeaderNav } from '../interfaces/header-nav.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

  items$: Observable<IHeaderNav[]>;
  constructor(public stubs: StubDataService) { }

  ngOnInit(): void {
    this.items$ = this.stubs.getItems$();
  }

}
