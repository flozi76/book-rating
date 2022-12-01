import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'br-book-rating-standalone',
  templateUrl: './book-rating-standalone.component.html',
  styleUrls: ['./book-rating-standalone.component.scss'],
  standalone: true,
  imports: [NgFor]
})

export class BookRatingStandaloneComponent {
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
