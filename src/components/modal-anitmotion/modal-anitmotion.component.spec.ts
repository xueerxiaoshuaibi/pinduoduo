import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAnitmotionComponent } from './modal-anitmotion.component';

describe('ModalAnitmotionComponent', () => {
  let component: ModalAnitmotionComponent;
  let fixture: ComponentFixture<ModalAnitmotionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAnitmotionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAnitmotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
