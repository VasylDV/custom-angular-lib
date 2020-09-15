import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { MyLibComponent } from './my-lib.component';
import { MyLibNavComponent } from './my-lib-nav/my-lib-nav.component';

@NgModule({
  declarations: [MyLibComponent, MyLibNavComponent],
  imports: [CommonModule, FlexLayoutModule, RouterModule ],
  exports: [MyLibComponent, MyLibNavComponent]
})
export class MyLibModule { }
