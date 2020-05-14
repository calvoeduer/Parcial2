import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditoRegisterCompomentComponent } from './credito-register-compoment.component';

describe('CreditoRegisterCompomentComponent', () => {
  let component: CreditoRegisterCompomentComponent;
  let fixture: ComponentFixture<CreditoRegisterCompomentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditoRegisterCompomentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditoRegisterCompomentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
