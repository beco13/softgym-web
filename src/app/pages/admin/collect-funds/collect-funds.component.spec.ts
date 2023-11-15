import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectFundsComponent } from './collect-funds.component';

describe('CollectFundsComponent', () => {
  let component: CollectFundsComponent;
  let fixture: ComponentFixture<CollectFundsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectFundsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectFundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
