import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstraintsAdditionComponent } from './constraints-addition.component';

describe('ConstraintsAdditionComponent', () => {
  let component: ConstraintsAdditionComponent;
  let fixture: ComponentFixture<ConstraintsAdditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstraintsAdditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstraintsAdditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
