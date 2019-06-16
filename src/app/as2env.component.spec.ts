import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { As2envComponent } from './as2env.component';

describe('As2envComponent', () => {
  let component: As2envComponent;
  let fixture: ComponentFixture<As2envComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ As2envComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(As2envComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
