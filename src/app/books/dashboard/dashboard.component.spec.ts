import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';
import { RatingState } from '../shared/rating-state-enum';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        {
          provide: BookRatingService,
          useValue: // Stub
          {
            rateUp: (b: Book) => b,
            determineRatingState: (book: Book): RatingState | undefined => undefined
          }
        }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    // fixture.nativeElement.querySelector() // DOM - Element

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call service.rateUp for doRateUp()', () => {

    // Arrange
    // Spion um rateUp zu überwachen
    const service = TestBed.inject(BookRatingService);
    const book = { isbn: '1234' } as Book; // Type Assertion

    // spyOn(service, 'rateUp'); //-> Error weil kein buch zurückgegeben wird
    // spyOn(service, 'rateUp').and.callThrough(); // => ok wird die methode von oben aufgerufen
    spyOn(service, 'rateUp').and.returnValue(book); // wir definieren hier was zurückgegeben wird

    // Act
    component.doRateUp(book);

    // Assert
    expect(service.rateUp).toHaveBeenCalled();
    expect(service.rateUp).toHaveBeenCalledWith(book);
    expect(service.rateUp).toHaveBeenCalledTimes(1);
    expect(service.rateUp).toHaveBeenCalledOnceWith(book);
  });
});
