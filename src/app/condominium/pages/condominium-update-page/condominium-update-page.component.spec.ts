import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CondominiumUpdatePageComponent } from './condominium-update-page.component';

describe('CondominiumUpdatePageComponent', () => {
  let component: CondominiumUpdatePageComponent;
  let fixture: ComponentFixture<CondominiumUpdatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CondominiumUpdatePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CondominiumUpdatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
