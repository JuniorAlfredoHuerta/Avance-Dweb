import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraorderComponent } from './compraorder.component';

describe('CompraorderComponent', () => {
  let component: CompraorderComponent;
  let fixture: ComponentFixture<CompraorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompraorderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompraorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
