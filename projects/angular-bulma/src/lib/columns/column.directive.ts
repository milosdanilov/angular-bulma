import { Directive, HostBinding, Input } from '@angular/core';

import { ColumnSize, NarrowType } from './column.interface';

@Directive({
  selector: '[blColumn], bl-column',
})
export class ColumnDirective {
  @Input()
  size!: ColumnSize;

  @Input()
  sizeMobile!: ColumnSize;

  @Input()
  sizeTablet!: ColumnSize;

  @Input()
  sizeDesktop!: ColumnSize;

  @Input()
  sizeWidescreen!: ColumnSize;

  @Input()
  sizeFullHD!: ColumnSize;

  @Input()
  offset!: ColumnSize;

  @Input()
  narrow!: NarrowType;

  @HostBinding('class')
  get elementClass() {
    return [
      'column',
      ...this.generateSizes(),
      this.offsetClass,
      this.narrowClass,
    ].join(' ');
  }

  get offsetClass() {
    return this.offset ? `is-offset-${this.offset}` : '';
  }

  get narrowClass() {
    if (this.narrow === '') {
      return 'is-narrow';
    }

    return this.narrow ? `is-narrow-${this.narrow}` : '';
  }

  private generateSizes() {
    return [
      this.size ? `is-${this.size}` : '',
      this.sizeMobile ? `is-${this.sizeMobile}-mobile` : '',
      this.sizeTablet ? `is-${this.sizeTablet}-tablet` : '',
      this.sizeDesktop ? `is-${this.sizeDesktop}-desktop` : '',
      this.sizeWidescreen ? `is-${this.sizeWidescreen}-widescreen` : '',
      this.sizeFullHD ? `is-${this.sizeFullHD}-fullhd` : '',
    ];
  }
}
