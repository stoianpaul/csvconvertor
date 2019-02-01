import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ImportCSVComponent} from './import-csv/import-csv.component';

const routes: Routes = [
  {path:'import-csv', component: ImportCSVComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
