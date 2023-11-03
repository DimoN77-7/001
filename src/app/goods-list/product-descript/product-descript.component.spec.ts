import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDescriptComponent } from './product-descript.component';

describe('ProductDescriptComponent', () => {
  let component: ProductDescriptComponent;
  let fixture: ComponentFixture<ProductDescriptComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductDescriptComponent]
    });
    fixture = TestBed.createComponent(ProductDescriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
