import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { BookDeleteConfirmationDialogComponent } from './book-delete-confirmation-dialog.component';

describe('BookDeleteConfirmationDialogComponent', () => {
  let component: BookDeleteConfirmationDialogComponent;
  let fixture: ComponentFixture<BookDeleteConfirmationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookDeleteConfirmationDialogComponent, MAT_DIALOG_DATA ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [{provide: MatDialogRef, useValue: {}}]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookDeleteConfirmationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
