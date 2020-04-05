import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopsDetailsComponent } from './shops-details.component';

describe('ShopsDetailsComponent', () => {
  let component: ShopsDetailsComponent;
  let fixture: ComponentFixture<ShopsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
