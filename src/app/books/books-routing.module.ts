import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookCreateComponent } from './book-create/book-create.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookSearchComponent } from './book-search/book-search.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  // Variante mit dashboard als präfix
  // { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  // { path: 'dashboard', component: DashboardComponent },
  { path: '', component: DashboardComponent, title : "Dashboard" },
  { path: 'search', component: BookSearchComponent },
  { path: 'create', component: BookCreateComponent },
  { path: ':isbn', component: BookDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
