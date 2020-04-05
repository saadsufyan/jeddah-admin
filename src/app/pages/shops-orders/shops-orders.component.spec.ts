import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopsOrdersComponent } from './shops-orders.component';

describe('ShopsOrdersComponent', () => {
  let component: ShopsOrdersComponent;
  let fixture: ComponentFixture<ShopsOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopsOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopsOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
