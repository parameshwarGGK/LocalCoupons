import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AppComponent } from './app.component';
//import { RetailerPageComponent } from './retailer-page/retailer-page.component';
import { AppRoutingModule } from './app.routing.module';
import { InnerModule } from './modules/inner/inner.module';
import { OuterModule } from './modules/outer/outer.module';


@NgModule({
  declarations: [
    AppComponent,
    
    
  ],
  imports: [
    AppRoutingModule,
    InnerModule,
    BrowserModule,
    OuterModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
