import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RespuestaofertaComponent } from './respuestaoferta.component';

describe('RespuestaofertaComponent', () => {
  let component: RespuestaofertaComponent;
  let fixture: ComponentFixture<RespuestaofertaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RespuestaofertaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RespuestaofertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
