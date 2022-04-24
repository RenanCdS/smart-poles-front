import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolePageComponent } from './pole-page.component';

describe('PolePageComponent', () => {
  let component: PolePageComponent;
  let fixture: ComponentFixture<PolePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PolePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
