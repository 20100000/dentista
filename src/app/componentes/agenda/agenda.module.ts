import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {AgendaComponent} from './agenda.component';

@NgModule({
  declarations: [
    AgendaComponent
  ],
  imports: [
    CommonModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: []
})
export class AgendaModule { }
