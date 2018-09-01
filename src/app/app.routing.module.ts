import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import {InnerModule} from './modules/inner/inner.module';
import {OuterModule} from './modules/outer/outer.module';


export function loadInnerModule() { return InnerModule; }
export function loadOuterModule() { return OuterModule; }


const routes: Routes = [
  { path: 'inner', loadChildren: loadInnerModule },
  { path: 'outer', loadChildren: loadOuterModule },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
