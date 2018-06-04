import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminuiComponent } from './adminui.component';

describe('AdminuiComponent', () => {
  let component: AdminuiComponent;
  let fixture: ComponentFixture<AdminuiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminuiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
