import { useState } from 'react';
import InputField from '../input-field/InputField';
import TipList from '../tip-list/TipList';
import type { FormContentProps } from './FormContent.types';
import { useAppContext } from '../../utils/contextHelper';
import styles from './FormContent.module.scss';

const FormContent = ({ 
  className,
  onSetBill,
  onSetPeople
}: FormContentProps) => {
  const { tipValues } = useAppContext();
  const [billErrorMessage, setBillErrorMessage] = useState<string>('');
  const [numPeopleErrorMessage, setNumPeopleErrorMessage] = useState<string>('');
  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handleBlur = (
    inputValue: number,
    setErrorMessage: React.Dispatch<React.SetStateAction<string>>
  ) => {
    if (inputValue === 0 || inputValue < 0 || isNaN(inputValue)) {
      setErrorMessage("Can't be zero");
    } else {
      setErrorMessage("");
    }
  };

  const handleBlurValidationError = (
    inputValue: number,
    setErrorMessage: React.Dispatch<React.SetStateAction<string>>
  ) => {
    if (inputValue === 0 || inputValue < 0 || isNaN(inputValue)) {
      setErrorMessage("Can't be zero");
    } else {
      setErrorMessage("");
    }
  };

  return (
    <div className={[styles['form-content'], className].join(' ')}>
      <form className={styles['content']} onSubmit={handleSubmit} noValidate>
        <div className={styles['section']}>
          <InputField
            label={'Bill'}
            icon={'dollar-sign'}
            value={tipValues.billAmount === 0 ? '' : tipValues.billAmount}
            min={0}
            step={0.01}
            onChange={(e) => {
              onSetBill(Number(e.target.value))
              handleBlurValidationError(
                Number(e.target.value),
                setBillErrorMessage
              );
            }}
            onBlur={() => handleBlur(tipValues.billAmount, setBillErrorMessage)}
            errorMessage={billErrorMessage}
          />
        </div>
        <div className={styles['section']}>
          <TipList />
        </div>
        <div className={styles['section']}>
          <InputField
            label={'Number of People'}
            icon={'user'}
            value={tipValues.numPeople === 0 ? '' : tipValues.numPeople}
            onChange={(e) => {
              onSetPeople(Number(e.target.value))
              handleBlurValidationError(
                Number(e.target.value),
                setNumPeopleErrorMessage
              );
            }}
            onBlur={() => handleBlur(tipValues.numPeople, setNumPeopleErrorMessage)}
            errorMessage={numPeopleErrorMessage}
          />
        </div>
      </form>
    </div>
  );
}

export default FormContent;
