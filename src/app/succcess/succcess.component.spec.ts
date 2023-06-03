import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucccessComponent } from './succcess.component';

describe('SucccessComponent', () => {
  let component: SucccessComponent;
  let fixture: ComponentFixture<SucccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SucccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SucccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
