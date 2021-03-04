import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutMinimalComponent } from './layout-minimal.component';

describe('LayoutMinimalComponent', () => {
  let component: LayoutMinimalComponent;
  let fixture: ComponentFixture<LayoutMinimalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutMinimalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutMinimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
