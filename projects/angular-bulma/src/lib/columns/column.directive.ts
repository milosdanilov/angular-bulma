import { Directive, HostBinding, Input } from '@angular/core';
import { ColumnSize } from './column.interface';

@Directive({
  selector: '[blColumn], bl-column',
})
export class ColumnDirective {
  @Input()
  size!: ColumnSize;

  @HostBinding('class')
  get elementClass() {
    return ['column', this.size ? `is-${this.size}` : ''].join(' ');
  }
}
