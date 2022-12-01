import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookRaitingComponent } from './book-raiting.component';

describe('BookRaitingComponent', () => {
  let component: BookRaitingComponent;
  let fixture: ComponentFixture<BookRaitingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookRaitingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookRaitingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
