import type { TipValueType } from '../../context/AppContext';

export type TipResultProps = {
  tipValues: TipValueType;
  onReset: () => void;
}