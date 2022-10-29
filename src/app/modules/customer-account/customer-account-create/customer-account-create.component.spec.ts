import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAccountCreateComponent } from './customer-account-create.component';

describe('CustomerAccountCreateComponent', () => {
  let component: CustomerAccountCreateComponent;
  let fixture: ComponentFixture<CustomerAccountCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerAccountCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerAccountCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
