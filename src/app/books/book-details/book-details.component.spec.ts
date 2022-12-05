import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { BookStoreService } from '../shared/book-store.service';

import { BookDetailsComponent } from './book-details.component';

describe('BookDetailsComponent', () => {
  let component: BookDetailsComponent;
  let fixture: ComponentFixture<BookDetailsComponent>;


  // TODO: How to get this test running again? Provider for ActivatedRoute?
  // TODO: Müssen immer providers für alle inject Komponenten?
  // TODO: Gibt es eine library oder so was wie Substitute.For<TT> in C#?
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookDetailsComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [{
        provide: ActivatedRoute, useValue: {
          snapshot: {
            paramMap: {
              get: (isbn: String) => 4567879
            }
          },
          paramMap: {
            subscribe: () => { }
          }
        }
      }, { provide: BookStoreService, useValue: {} }]
    })
      .compileComponents();

    fixture = TestBed.createComponent(BookDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
