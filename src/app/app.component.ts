import { Component } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { concatMap, fromEvent, defaultIfEmpty, reduce, scan, map, filter, Observable, switchMap } from 'rxjs';

@Component({
  selector: 'br-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Book Rating';
  pageTitle$?: Observable<any>;

  constructor(private router: Router) {
  }

  ngOnInit() {
    // this.pageTitle$ = this.route.data.pipe(map(data => data['pageTitle']))

    // this.pageTitle$.subscribe(title => console.log('Route activated: ' + title));

    this.pageTitle$ = this.router.events.pipe(
      filter(event => event instanceof ActivationEnd)
      , map(actEnd => (actEnd as ActivationEnd))
      , map(actEnd => actEnd.snapshot.data['pageTitle'])
      , reduce((curr, acc) => {
        const result = curr ?? false;
        console.log(result);
        return curr?? acc})
      // , map(title => title ?? this.title)
      // , reduce((acc, curr) => {
      //   console.log(acc);
      //   console.log(curr);
      //   return this.title})
    );

    this.pageTitle$.subscribe(change => console.log('event: ' + change));
  }
}
