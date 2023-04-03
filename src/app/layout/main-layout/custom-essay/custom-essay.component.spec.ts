import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomEssayComponent } from './custom-essay.component';

describe('CustomEssayComponent', () => {
  let component: CustomEssayComponent;
  let fixture: ComponentFixture<CustomEssayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomEssayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomEssayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
