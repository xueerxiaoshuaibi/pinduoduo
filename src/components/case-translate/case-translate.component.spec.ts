import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseTranslateComponent } from './case-translate.component';

describe('CaseTranslateComponent', () => {
  let component: CaseTranslateComponent;
  let fixture: ComponentFixture<CaseTranslateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseTranslateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseTranslateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
