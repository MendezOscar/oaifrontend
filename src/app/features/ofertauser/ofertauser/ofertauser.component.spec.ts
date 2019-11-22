import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertauserComponent } from './ofertauser.component';

describe('OfertauserComponent', () => {
  let component: OfertauserComponent;
  let fixture: ComponentFixture<OfertauserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfertauserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfertauserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
