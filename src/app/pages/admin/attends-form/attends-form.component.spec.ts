import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendsFormComponent } from './attends-form.component';

describe('AttendsFormComponent', () => {
  let component: AttendsFormComponent;
  let fixture: ComponentFixture<AttendsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttendsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
