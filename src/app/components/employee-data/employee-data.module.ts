import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeDataRoutingModule } from './employee-data-routing.module';
import { EmployeeDataComponent } from './employee-data.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    EmployeeDataComponent
  ],
  imports: [
    CommonModule,
    EmployeeDataRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class EmployeeDataModule { }
