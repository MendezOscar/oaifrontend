import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitarofertaComponent } from './solicitaroferta.component';

describe('SolicitarofertaComponent', () => {
  let component: SolicitarofertaComponent;
  let fixture: ComponentFixture<SolicitarofertaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitarofertaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitarofertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
