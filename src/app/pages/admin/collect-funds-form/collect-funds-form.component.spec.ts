import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectFundsFormComponent } from './collect-funds-form.component';

describe('CollectFundsFormComponent', () => {
  let component: CollectFundsFormComponent;
  let fixture: ComponentFixture<CollectFundsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectFundsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectFundsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
