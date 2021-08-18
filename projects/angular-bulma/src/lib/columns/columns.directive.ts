import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[blColumns], bl-columns',
})
export class ColumnsDirective {
  @HostBinding('class')
  elementClass = 'columns';
}
