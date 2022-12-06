import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Book } from '../shared/book';
import {ValdemortConfig } from 'ngx-valdemort'
import { BookStoreService } from '../shared/book-store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'br-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.scss']
})
export class BookCreateComponent {

  someLocalizeText : string = "Localize Text";
  localizedText : string = this.someLocalizeText;

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
    authors: new FormArray([
      new FormControl('', { nonNullable: true }),
      new FormControl('', { nonNullable: true }),
      new FormControl('', { nonNullable: true }),
    ]),
    nullableProp: new FormControl<string | null>('', { nonNullable: true }),
  });

  constructor(private config: ValdemortConfig, private bookStoreService : BookStoreService, private router : Router){
    config.errorClasses = "feedback-error"
    this.localizedText = $localize `${this.someLocalizeText}`;
  }

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

    this.bookForm.patchValue({title : 'Gugugg'});

    this.bookStoreService.create(book).subscribe(receivedBook => {

      // this.router.navigate(['/books', receivedBook.isbn]) // navigate to detail
      //this.router.navigateByUrl('/books') // Navigate to url
      // this.bookForm.disable();

      this.bookForm.reset();
      this.bookForm.markAsUntouched();
    });
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
