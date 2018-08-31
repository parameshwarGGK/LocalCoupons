import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MenuModule} from 'primeng/menu';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputMaskModule } from 'primeng/inputmask';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { GrowlModule } from 'primeng/growl';
import { TooltipModule } from 'primeng/tooltip';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MapComponent } from './map/map.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: AppComponent},
  { path: 'maps', component: MapComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MapComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    HttpClientModule,
    TabMenuModule,
    BrowserModule,
    TableModule,
    ReactiveFormsModule,
    MultiSelectModule,
    DropdownModule,
    CalendarModule,
    InputTextModule,
    InputSwitchModule,
    InputMaskModule,
    AutoCompleteModule,
    FormsModule,
    GrowlModule,
    TooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
