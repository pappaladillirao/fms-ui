import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAccountViewComponent } from './customer-account-view.component';

describe('CustomerAccountViewComponent', () => {
  let component: CustomerAccountViewComponent;
  let fixture: ComponentFixture<CustomerAccountViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerAccountViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerAccountViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
