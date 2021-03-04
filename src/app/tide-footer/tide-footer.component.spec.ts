import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TideFooterComponent } from './tide-footer.component';

describe('TideFooterComponent', () => {
  let component: TideFooterComponent;
  let fixture: ComponentFixture<TideFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TideFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TideFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
