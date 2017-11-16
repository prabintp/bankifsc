import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescDetailsComponent } from './desc-details.component';

describe('DescDetailsComponent', () => {
  let component: DescDetailsComponent;
  let fixture: ComponentFixture<DescDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
