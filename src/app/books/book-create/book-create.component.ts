import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Book } from '../shared/book';
import {ValdemortConfig } from 'ngx-valdemort'

@Component({
  selector: 'br-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.scss']
})
export class BookCreateComponent {

  constructor(private config: ValdemortConfig ){
    config.errorClasses = "feedback-error"
  }

  bookForm = new FormGroup({
    isbn: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.pattern(/^[0-9]*$/),
        Validators.minLength(10),
        Validators.maxLength(13),
      ]
    }),
    title: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(50),
      ]
    }),
    description: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.maxLength(1500),
      ] }),
    rating: new FormControl(1, {
      nonNullable: true,
      validators: [
        Validators.min(1),
        Validators.max(5),
      ]}),
    price: new FormControl(0, { nonNullable: true,
      validators: [
        Validators.min(0),
      ]} ),
    nullableProp: new FormControl<string | null>('', { nonNullable: true }),
  });


  isInvalid(controlName: string) : boolean {
    const control = this.bookForm.get(controlName);
    // return !!(control?.touched && control.invalid); // doppelte negiereung
    return !!control && control.touched && control.invalid; // doppelte negiereung
  }

  hasError(controlName : string, errorCode: string) : boolean{
    const control = this.bookForm.get(controlName);
    return !!control && control.touched && control.hasError(errorCode);
  }

  submitForm(){
    // TODO: ✅ if valid touch all => wie in anaeitung und button nicht deaktivieren.
    // TODO: guard im routing einbauen, dass nicht weitergeroutet werden darf.

    if(this.bookForm.invalid){
      this.bookForm.markAllAsTouched();
      return;
    }

    const book: Book = this.bookForm.getRawValue();
  }
}

/* TODO

- Validierung
- Feedback
  - "Die ISBN ist ungültig"
  - "Die ISBN ist zu kurz"
- Button
  - abschicken
  - HTTP -> create
  - bei Erfolg
    - Redirect zu Dashboard oder Detailseite
    - Meldung buch wurde angelegt
    - Formular zurücksetzen

*/
