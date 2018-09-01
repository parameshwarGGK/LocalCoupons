import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OuterComponent} from '@outer/outer.component';
import { LoginFormComponent } from '@outer/login-form/login-form.component';
const outerRoutes: Routes = [
    {path: '', component: OuterComponent, children: [
  { path:"login", component: LoginFormComponent }
    ]}
];

export const outerRoutingModule = RouterModule.forChild(outerRoutes);