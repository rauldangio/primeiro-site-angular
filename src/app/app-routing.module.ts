import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HoteisModule } from './hoteis/hoteis.module';

const routes: Routes = [
  {path:"",pathMatch: "full", redirectTo:"hoteis"},
  {path:"hoteis",loadChildren: () => import("./hoteis/hoteis.module").then(m => m.HoteisModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
