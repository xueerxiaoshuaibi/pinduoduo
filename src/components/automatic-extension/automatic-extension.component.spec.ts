import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomaticExtensionComponent } from './automatic-extension.component';

describe('AutomaticExtensionComponent', () => {
  let component: AutomaticExtensionComponent;
  let fixture: ComponentFixture<AutomaticExtensionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutomaticExtensionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutomaticExtensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
