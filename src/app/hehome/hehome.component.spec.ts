import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HehomeComponent } from './hehome.component';

describe('HehomeComponent', () => {
  let component: HehomeComponent;
  let fixture: ComponentFixture<HehomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HehomeComponent]
    });
    fixture = TestBed.createComponent(HehomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
