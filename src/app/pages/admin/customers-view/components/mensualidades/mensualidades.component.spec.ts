import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensualidadesComponent } from './mensualidades.component';

describe('MensualidadesComponent', () => {
  let component: MensualidadesComponent;
  let fixture: ComponentFixture<MensualidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensualidadesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MensualidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
