import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'books', pathMatch: 'full'}, // path match full wird fast immer bei einer weiterleitung ab dem leeren pfad (root url)
  { path:'books', loadChildren: ()=> import('./books/books.module').then(m => m.BooksModule)},
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) } // oder default export in books modul
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
