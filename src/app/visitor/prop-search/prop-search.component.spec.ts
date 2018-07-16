import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropSearchComponent } from './prop-search.component';

describe('PropSearchComponent', () => {
  let component: PropSearchComponent;
  let fixture: ComponentFixture<PropSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
