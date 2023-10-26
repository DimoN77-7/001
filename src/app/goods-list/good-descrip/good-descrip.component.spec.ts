import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodDescripComponent } from './good-descrip.component';

describe('GoodDescripComponent', () => {
  let component: GoodDescripComponent;
  let fixture: ComponentFixture<GoodDescripComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GoodDescripComponent]
    });
    fixture = TestBed.createComponent(GoodDescripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
