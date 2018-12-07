import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CostcentreComponent } from './costcentre/costcentre.component';
import { CostcentredetailComponent } from './costcentredetail/costcentredetail.component';

const routes: Routes = [
  { path: 'costcentre', component: CostcentreComponent},  
  { path: 'costcentredetail/:id', component: CostcentredetailComponent},
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
