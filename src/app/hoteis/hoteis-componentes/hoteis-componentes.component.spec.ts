import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoteisComponentesComponent } from './hoteis-componentes.component';

describe('HoteisComponentesComponent', () => {
  let component: HoteisComponentesComponent;
  let fixture: ComponentFixture<HoteisComponentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoteisComponentesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HoteisComponentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
