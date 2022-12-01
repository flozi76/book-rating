import { Component, Input } from '@angular/core';

@Component({
  selector: 'br-book-rating',
  templateUrl: './book-rating.component.html',
  styleUrls: ['./book-rating.component.scss']
})
export class BookRatingComponent {

  @Input() bookrating? : number;

  ratings() : number[]{
    return new Array(this.bookrating)
  }

  missingRatings() : number[]{
    let rait:number =  this.bookrating??0;
    var remainingNumber = 5 - rait;
    return new Array(remainingNumber)
  }
}
