import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegWindowComponent } from './reg-window.component';

describe('RegWindowComponent', () => {
  let component: RegWindowComponent;
  let fixture: ComponentFixture<RegWindowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegWindowComponent]
    });
    fixture = TestBed.createComponent(RegWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
