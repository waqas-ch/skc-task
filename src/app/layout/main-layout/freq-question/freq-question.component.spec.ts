import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreqQuestionComponent } from './freq-question.component';

describe('FreqQuestionComponent', () => {
  let component: FreqQuestionComponent;
  let fixture: ComponentFixture<FreqQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreqQuestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreqQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
