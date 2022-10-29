import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerHistoryCreateComponent } from './customer-history-create.component';

describe('CustomerHistoryCreateComponent', () => {
  let component: CustomerHistoryCreateComponent;
  let fixture: ComponentFixture<CustomerHistoryCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerHistoryCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerHistoryCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
