import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccuntsComponent } from './accunts.component';

describe('AccuntsComponent', () => {
  let component: AccuntsComponent;
  let fixture: ComponentFixture<AccuntsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccuntsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccuntsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
