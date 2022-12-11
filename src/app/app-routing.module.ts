import { Injectable, NgModule } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterModule, RouterStateSnapshot, Routes, TitleStrategy } from '@angular/router';
import { DefaultNotFoundPageComponent } from './default-not-found-page/default-not-found-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'books', pathMatch: 'full' }, // path match full wird fast immer bei einer weiterleitung ab dem leeren pfad (root url)
  { path: 'books', loadChildren: () => import('./books/books.module').then(m => m.BooksModule) },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: 'weather', loadChildren: () => import('./weather/weather.module').then(m => m.WeatherModule) }, // oder default export in books modul
  {
    path: '**',
    component: DefaultNotFoundPageComponent,
    data: { title: "Not Found"},
    title: "Page Not Found"
  }
];

@Injectable()
export class TemplatePageTitleStrategy extends TitleStrategy {
  constructor(private readonly title: Title) {
    super();
  }

  override updateTitle(routerState: RouterStateSnapshot) {
    const title = this.buildTitle(routerState);
    if (title !== undefined) {
      this.title.setTitle(`My App - ${title}`);
    }
    else{
      this.title.setTitle(routerState.url)
    }
  }
}

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{provide:TitleStrategy, useClass: TemplatePageTitleStrategy}]
})
export class AppRoutingModule { }
