import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerlayoutComponent } from './ownerlayout.component';

describe('OwnerlayoutComponent', () => {
  let component: OwnerlayoutComponent;
  let fixture: ComponentFixture<OwnerlayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerlayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerlayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
