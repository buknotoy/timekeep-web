import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CostcentreComponent } from './costcentre/costcentre.component';

const routes: Routes = [
  { path: 'costcentre', component: CostcentreComponent},
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
