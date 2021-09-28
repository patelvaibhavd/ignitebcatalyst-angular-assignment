import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './pipe/filter.pipe';
import { ShortParamsDirective } from './directive/short-params.directive';
import { FormsModule } from '@angular/forms';
import { SortPipe } from './pipe/sort.pipe';

@NgModule({
  declarations: [
    FilterPipe,
    ShortParamsDirective,
    SortPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    FilterPipe,
    ShortParamsDirective,
    SortPipe
  ]
})
export class SharedModule { }
