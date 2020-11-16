import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageBaseComponent } from './image-base.component';

describe('ImageBaseComponent', () => {
  let component: ImageBaseComponent;
  let fixture: ComponentFixture<ImageBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
