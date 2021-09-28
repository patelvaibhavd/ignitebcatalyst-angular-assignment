import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appShortParams]'
})
export class ShortParamsDirective {

  @Output() param: EventEmitter<any> = new EventEmitter();
  constructor(private element: ElementRef) {}

  @HostListener('click') onClickIcon() {
    this.selectSort(this.element.nativeElement.id);
  }

  selectSort(id: any) {
    switch (id) {
      case 'companyNameAsc':
        this.param.emit({ dir: 'asc', col: 'companyName', typ: 'string' });
        break;
      case 'firstAsc':
        this.param.emit({ dir: 'asc', col: 'first', typ: 'string' });
        break;
      case 'lastAsc':
        this.param.emit({ dir: 'asc', col: 'last', typ: 'string' });
        break;
      case 'ageAsc':
        this.param.emit({ dir: 'asc', col: 'age', typ: 'number' });
        break;
      case 'emailAsc':
        this.param.emit({ dir: 'asc', col: 'email', typ: 'string' });
        break;
      case 'companyNameDesc':
        this.param.emit({ dir: 'desc', col: 'companyName', typ: 'string' });
        break;
      case 'firstDesc':
        this.param.emit({ dir: 'desc', col: 'first', typ: 'string' });
        break;
      case 'lastDesc':
        this.param.emit({ dir: 'desc', col: 'last', typ: 'string' });
        break;
      case 'ageDesc':
        this.param.emit({ dir: 'desc', col: 'age', typ: 'number' });
        break;
      case 'emailDesc':
        this.param.emit({ dir: 'desc', col: 'email', typ: 'string' });
        break;
    }
  }

}
