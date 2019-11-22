import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationadminComponent } from './navigationadmin.component';

describe('NavigationadminComponent', () => {
  let component: NavigationadminComponent;
  let fixture: ComponentFixture<NavigationadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
