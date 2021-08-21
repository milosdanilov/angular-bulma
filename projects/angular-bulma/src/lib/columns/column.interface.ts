export type ColumnSize = _ColumnSize | Grid;

type _ColumnSize =
  | 'full'
  | 'four-fifths'
  | 'three-quarters'
  | 'two-thirds'
  | 'three-fifths'
  | 'half'
  | 'two-fifths'
  | 'one-third'
  | 'one-quarter'
  | 'one-fifth';

type Grid = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';

export type NarrowType = '' | Breakpoint;

type Breakpoint =
  | 'mobile'
  | 'tablet'
  | 'touch'
  | 'desktop'
  | 'widescreen'
  | 'fullhd';
