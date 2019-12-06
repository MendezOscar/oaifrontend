import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AperturarComponent } from './aperturar.component';

describe('AperturarComponent', () => {
  let component: AperturarComponent;
  let fixture: ComponentFixture<AperturarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AperturarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AperturarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
