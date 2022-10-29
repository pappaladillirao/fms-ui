import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerHistoryListComponent } from './customer-history-list.component';

describe('CustomerHistoryListComponent', () => {
  let component: CustomerHistoryListComponent;
  let fixture: ComponentFixture<CustomerHistoryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerHistoryListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerHistoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
