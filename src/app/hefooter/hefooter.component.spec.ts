import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HefooterComponent } from './hefooter.component';

describe('HefooterComponent', () => {
  let component: HefooterComponent;
  let fixture: ComponentFixture<HefooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HefooterComponent]
    });
    fixture = TestBed.createComponent(HefooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
