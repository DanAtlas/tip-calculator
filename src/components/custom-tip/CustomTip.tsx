import type { CustomTipProps } from './CustomTip.types';
import { useAppContext } from '../../utils/contextHelper';
import styles from './CustomTip.module.scss';

const CustomTip = ({ 
  onSetTip
}: CustomTipProps) => {
  const { tipValues } = useAppContext();

  return (
    <li className={styles['custom-tip']}>
      <input
        id='custom-tip'
        type="number"
        min="1"
        max="100"
        step="1"
        className={styles['custom-tip-input']}
        value={tipValues.tip === 0 ? '' : tipValues.tip}
        onChange={(e) => onSetTip(Number(e.target.value))}
        placeholder={'Custom'}
      />
    </li>
  );
};

export default CustomTip;