import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLibNavComponent } from './my-lib-nav.component';

describe('MyLibNavComponent', () => {
  let component: MyLibNavComponent;
  let fixture: ComponentFixture<MyLibNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyLibNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyLibNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
