import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookRatingStandaloneComponent } from './book-rating-standalone.component';

describe('BookRatingStandaloneComponent', () => {
  let component: BookRatingStandaloneComponent;
  let fixture: ComponentFixture<BookRatingStandaloneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookRatingStandaloneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookRatingStandaloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
