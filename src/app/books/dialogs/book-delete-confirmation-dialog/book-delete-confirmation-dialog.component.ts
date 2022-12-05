import { Component, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Book } from '../../shared/book';

@Component({
  selector: 'br-book-delete-confirmation-dialog',
  templateUrl: './book-delete-confirmation-dialog.component.html',
  styleUrls: ['./book-delete-confirmation-dialog.component.scss']
})
export class BookDeleteConfirmationDialogComponent {
  constructor(public dialogRef: MatDialogRef<BookDeleteConfirmationDialogComponent>,@Inject(MAT_DIALOG_DATA) public data: Book) {}
}

// TODO: angular/material/.. eg. dialog?
