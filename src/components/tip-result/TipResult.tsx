import type { TipResultProps } from "./TipResult.types";
import styles from './TipResult.module.scss';

const TipResult = ({ 
  tipValues, 
  onReset 
}: TipResultProps) => {
  const tipPerPerson =
    tipValues.tip !== 0
      ? tipValues.numPeople !== 0
        ? ((tipValues.tip / 100) * tipValues.billAmount) / tipValues.numPeople
        : 0.0
      : tipValues.numPeople !== 0
      ? tipValues.billAmount / tipValues.numPeople
      : 0.0;

  const totalBillPerPerson =
    tipPerPerson !== 0
      ? tipValues.billAmount / tipValues.numPeople + tipPerPerson
      : 0.0;

  return (
    <div className={styles['tip-result']}>
      <div>
        <div className={styles['tip-result__label']}>
          <div>
            <h2>Tip Amount</h2>
            <p>/ person</p>
          </div>
          <h1 className={styles['tip-result__amount']}>${tipPerPerson.toFixed(2)}</h1>
        </div>
        <div className={styles['tip-result__label']}>
          <div>
            <h2>Total</h2>
            <p>/ person</p>
          </div>
          <h1 className={styles['tip-result__amount']}>${totalBillPerPerson.toFixed(2)}</h1>
        </div>
      </div>

      <button
        type="reset"
        disabled={!tipPerPerson || !totalBillPerPerson}
        onClick={onReset}
        className={styles['tip-result__button']}
      >
        RESET
      </button>
    </div>
  );
}

export default TipResult;