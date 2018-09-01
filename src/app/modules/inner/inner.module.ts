import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenuModule} from 'primeng/menu';

import { HttpClientModule } from '@angular/common/http';
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
import {DataViewModule} from 'primeng/dataview';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import * as IM from './innerImports';
@NgModule({
  imports: [
    CommonModule,
    DataViewModule,
    HttpClientModule,
    TabMenuModule,
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
    TooltipModule,
    IM.innerRoutingModule
  ],
  declarations: [
    IM.InnerComponent,
    IM.RetailerViewComponent,
    IM.CouponCreationComponent,
    IM.UserPageComponent
    ],
    providers:[
      IM.UserService
    ]
})
export class InnerModule { }
