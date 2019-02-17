import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestClassSelectorComponent } from './test-class-selector.component';

describe('TestClassSelectorComponent', () => {
  let component: TestClassSelectorComponent;
  let fixture: ComponentFixture<TestClassSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestClassSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestClassSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
