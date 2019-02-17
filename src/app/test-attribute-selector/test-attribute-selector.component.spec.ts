import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestAttributeSelectorComponent } from './test-attribute-selector.component';

describe('TestAttributeSelectorComponent', () => {
  let component: TestAttributeSelectorComponent;
  let fixture: ComponentFixture<TestAttributeSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestAttributeSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestAttributeSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
