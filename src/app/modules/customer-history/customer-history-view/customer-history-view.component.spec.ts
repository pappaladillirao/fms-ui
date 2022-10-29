import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerHistoryViewComponent } from './customer-history-view.component';

describe('CustomerHistoryViewComponent', () => {
  let component: CustomerHistoryViewComponent;
  let fixture: ComponentFixture<CustomerHistoryViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerHistoryViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerHistoryViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
