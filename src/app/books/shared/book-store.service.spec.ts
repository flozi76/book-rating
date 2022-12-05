import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { BookStoreService } from './book-store.service';

describe('BookStoreService', () => {
  let service: BookStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ {provide: HttpClient, useValue:{}}],
    });
    service = TestBed.inject(BookStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
