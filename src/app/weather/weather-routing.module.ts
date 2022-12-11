import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrevisionComponent } from './prevision/prevision.component';

const routes: Routes = [{ path: '', component: PrevisionComponent, data: { pageTitle: 'Weather'}}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeatherRoutingModule { }
