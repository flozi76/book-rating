import { Component, Input } from '@angular/core';

@Component({
  selector: 'br-book-raiting',
  templateUrl: './book-raiting.component.html',
  styleUrls: ['./book-raiting.component.scss']
})
export class BookRaitingComponent {

  @Input() bookrating? : number;

  raitings() : number[]{
    return new Array(this.bookrating)
  }

  missingRaitings() : number[]{
    let rait:number =  this.bookrating??0;
    var remainingNumber = 5 - rait;
    return new Array(remainingNumber)
  }
}
