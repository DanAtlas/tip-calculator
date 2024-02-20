import CustomTip from '../custom-tip/CustomTip';
import { useAppContext } from '../../utils/contextHelper';
import styles from './TipList.module.scss';

const buttonValue = (value: number) => {
  const percent = value.toString() + '%';
  return percent;
};

const TipList = () => {
  const { tipValues, setTipValues } = useAppContext();

  const handleSetTip = (tip: number) => {
    const updateTip = {
      ...tipValues,
      tip,
    };
    setTipValues(updateTip);
  };

  const handleButtonClick = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    handleSetTip(Number(e.currentTarget.value.slice(0, -1)));
  };

  return (
    <div className={styles['tip-list-wrapper']}>
      <p className={styles['label']}>Select Tip %</p>
      <ul className={styles['tip-list']}>
        {[5, 10, 15, 25, 50].map((value, index) => (
          <li key={index}>
            <input 
              type="button" 
              value={buttonValue(value)} 
              className={[styles['tip-button'], tipValues.tip === value ? styles['tip-button--active'] : ''].join(' ')}
              onClick={handleButtonClick} 
            />
          </li>
        ))}
        <CustomTip onSetTip={handleSetTip} />
      </ul>
    </div>
  );
};

export default TipList;