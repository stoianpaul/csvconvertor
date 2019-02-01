import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificareCSVComponent } from './verificare-csv.component';

describe('VerificareCSVComponent', () => {
  let component: VerificareCSVComponent;
  let fixture: ComponentFixture<VerificareCSVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerificareCSVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificareCSVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
