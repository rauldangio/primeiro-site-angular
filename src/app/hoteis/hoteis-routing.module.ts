import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HoteisComponentesComponent } from './hoteis-componentes/hoteis-componentes.component';


const routes: Routes = [
  {path:"", component: HoteisComponentesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HoteisRoutingModule { }
