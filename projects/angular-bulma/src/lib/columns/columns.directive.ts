import { Directive, HostBinding, Input } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

import { GapSize } from './columns.iterface';

@Directive({
  selector: '[blColumns], bl-columns',
})
export class ColumnsDirective {
  private _multiline!: boolean;
  private _gapless!: boolean;
  private _vcentered!: boolean;
  private _centered!: boolean;

  @Input()
  set multiline(value: string) {
    this._multiline = coerceBooleanProperty(value);
  }

  @Input()
  set gapless(value: string) {
    this._gapless = coerceBooleanProperty(value);
  }

  @Input()
  set vcentered(value: string) {
    this._vcentered = coerceBooleanProperty(value);
  }

  @Input()
  set centered(value: string) {
    this._centered = coerceBooleanProperty(value);
  }

  @Input()
  gap!: GapSize;

  @Input()
  gapMobile!: GapSize;

  @Input()
  gapTablet!: GapSize;

  @Input()
  gapDesktop!: GapSize;

  @Input()
  gapWidescreen!: GapSize;

  @Input()
  gapFullHD!: GapSize;

  @HostBinding('class')
  get elementClass() {
    return [
      'columns',
      this._multiline ? 'is-multiline' : '',
      this._gapless ? 'is-gapless' : '',
      this._vcentered ? 'is-vcentered': '',
      this._centered ? 'is-centered' : '',
      ...this.calculateGaps(),
    ].join(' ');
  }

  private calculateGaps() {
    const gaps = [
      this.gap ? `is-${this.gap}` : '',
      this.gapMobile ? `is-${this.gapMobile}-mobile` : '',
      this.gapTablet ? `is-${this.gapTablet}-tablet` : '',
      this.gapDesktop ? `is-${this.gapDesktop}-desktop` : '',
      this.gapWidescreen ? `is-${this.gapWidescreen}-widescreen` : '',
      this.gapFullHD ? `is-${this.gapFullHD}-fullhd` : '',
    ].filter(Boolean);

    return gaps.length ? [...gaps, 'is-variable'] : [];
  }
}
