import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';

import { IMyLibNav } from './my-lib-nav.interface';

@Component({
  selector: 'lib-my-lib-nav',
  templateUrl: './my-lib-nav.component.html',
  styleUrls: ['./my-lib-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyLibNavComponent<T extends IMyLibNav> {

  @Output() wasClicked = new EventEmitter<void>();
  @Input() items$: Observable<T[]>;

  trackById(index: number): number {
    return index;
  }

  onClick(): void {
    this.wasClicked.emit();
  }
}
