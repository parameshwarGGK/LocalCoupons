import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OuterComponent } from '@outer/outer.component';
import { LoginFormComponent } from '@outer/login-form/login-form.component';
import { outerRoutingModule } from './outer.routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    outerRoutingModule
  ],
  declarations: [
    OuterComponent, LoginFormComponent ]
})
export class OuterModule { }
