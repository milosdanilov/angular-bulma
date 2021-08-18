import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[blColumn], bl-column',
})
export class ColumnDirective {
  @HostBinding('class')
  elementClass = 'column';
}
