import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoleRegisterFormComponent } from './pole-register-form.component';

describe('PoleRegisterFormComponent', () => {
  let component: PoleRegisterFormComponent;
  let fixture: ComponentFixture<PoleRegisterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoleRegisterFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoleRegisterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
