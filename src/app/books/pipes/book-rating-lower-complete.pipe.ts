import { Pipe, PipeTransform } from '@angular/core';
import { RatingState } from '../shared/rating-state-enum';

@Pipe({
  name: 'bookRatingLowerComplete'
})
export class BookRatingLowerCompletePipe implements PipeTransform {

  transform(ratingState : RatingState | undefined): boolean {
    return ratingState === RatingState.MinRatingReached;
  }

}
