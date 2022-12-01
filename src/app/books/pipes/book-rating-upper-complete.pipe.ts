import { Pipe, PipeTransform } from '@angular/core';
import { RatingState } from '../shared/rating-state-enum';

@Pipe({
  name: 'bookRatingUpperComplete'
})
export class BookRatingUpperCompletePipe implements PipeTransform {

  transform(ratingState : RatingState | undefined): boolean {
    return ratingState === RatingState.MaxRatingReached;
  }

}
