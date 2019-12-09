import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {InputTextModule} from 'primeng/inputtext';
import {SpinnerModule} from 'primeng/spinner';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InputTextModule,
    SpinnerModule,
    TableModule,
    ButtonModule,
    CardModule
  ],

  exports:[
    InputTextModule,
    SpinnerModule,
    TableModule,
    ButtonModule,
    CardModule
  ]
})
export class PrimengModule { }
