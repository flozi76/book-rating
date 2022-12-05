import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {
  private apiUrl = 'https://api.angular.schule';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Book[]> {
    // Falls nicht Book, oder unklar, muss in der Laufzeit geprüft werden.
    return this.http.get<Book[]>(this.apiUrl + '/books')
    // return this.http.get<Book[]>(this.apiUrl + '/books').pipe(... validieren...) eg ZOt als validierungsframework
  }

  getSingle(isbn: string) : Observable<Book>{
    return this.http.get<Book>(this.apiUrl + '/books/'+ isbn)
  }

  create(book: Book) : Observable<Book>{
    return this.http.post<Book>(this.apiUrl + '/books/', book)
  }

  search(term: string):Observable<Book[]>{
    return this.http.get<Book[]>(this.apiUrl + '/books/search/'+ term)
  }

  deleteBook(isbn: String) :Observable<unknown> {
    return this.http.delete<unknown>(this.apiUrl + '/books/'+ isbn)
  }

  resetBookList() {
    // Die Angabe von Book ist irrelevant, auch wenn sonstwas zurückgegeben wird, gibt's hier keinen fehler
    return this.http.delete<Book[]>(this.apiUrl + '/books/')
  }
}
