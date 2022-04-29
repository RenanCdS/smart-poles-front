import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CondominiumRegisterPageComponent } from './condominium-register-page.component';

describe('CondominiumRegisterPageComponent', () => {
  let component: CondominiumRegisterPageComponent;
  let fixture: ComponentFixture<CondominiumRegisterPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CondominiumRegisterPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CondominiumRegisterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
