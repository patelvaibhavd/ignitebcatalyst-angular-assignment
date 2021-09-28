import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDataComponent } from './employee-data.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeeDataComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeDataRoutingModule { }
