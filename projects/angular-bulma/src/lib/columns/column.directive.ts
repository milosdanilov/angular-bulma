import { Directive, HostBinding, Input } from '@angular/core';
import { ColumnSize } from './column.interface';

@Directive({
  selector: '[blColumn], bl-column',
})
export class ColumnDirective {
  @Input()
  size!: ColumnSize;

  @Input()
  offset!: ColumnSize;

  @HostBinding('class')
  get elementClass() {
    return ['column', this.sizeClass, this.offsetClass].join(' ');
  }

  get sizeClass() {
    return this.size ? `is-${this.size}` : '';
  }

  get offsetClass() {
    return this.offset ? `is-offset-${this.offset}` : '';
  }
}
