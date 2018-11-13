import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FunComponent } from './fun/fun.component';
import { PracticalComponent } from './practical/practical.component';

const routes: Routes = [
  { path: 'fun', component: FunComponent },
  { path: 'practical', component: PracticalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
