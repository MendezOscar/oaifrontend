import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertageneradaComponent } from './ofertagenerada.component';

describe('OfertageneradaComponent', () => {
  let component: OfertageneradaComponent;
  let fixture: ComponentFixture<OfertageneradaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfertageneradaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfertageneradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
