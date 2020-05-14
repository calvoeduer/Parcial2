import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditosComponentComponent } from './creditos-component.component';

describe('CreditosComponentComponent', () => {
  let component: CreditosComponentComponent;
  let fixture: ComponentFixture<CreditosComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditosComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditosComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
