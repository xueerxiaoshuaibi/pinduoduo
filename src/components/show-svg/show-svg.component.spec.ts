import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSvgComponent } from './show-svg.component';

describe('ShowSvgComponent', () => {
  let component: ShowSvgComponent;
  let fixture: ComponentFixture<ShowSvgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowSvgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
