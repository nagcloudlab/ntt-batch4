import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveReviewFormComponent } from './reactive-review-form.component';

describe('ReactiveReviewFormComponent', () => {
  let component: ReactiveReviewFormComponent;
  let fixture: ComponentFixture<ReactiveReviewFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveReviewFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReactiveReviewFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
