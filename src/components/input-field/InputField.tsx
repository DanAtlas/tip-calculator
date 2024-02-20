import type { InputFieldProps } from './InputField.types';
import styles from './InputField.module.scss';

const formatLabel = (label: string) => {
  return label.toLowerCase().replaceAll(' ', '-');
}

const InputField = ({ 
  className, 
  onChange, 
  onBlur,
  errorMessage, 
  label, 
  icon, 
  value, 
  min = 1, 
  step = 1 
}: InputFieldProps) => {
  return (
    <div className={[styles['input-field'], className].join(' ')}>
      <div className={styles['label-wrapper']}>
        <label className={styles['label']}>{label}</label>
        {errorMessage && <span className={styles['error-message']}>{errorMessage}</span>}
      </div>
      <div className={styles['input-field-wrapper']}>
        <i className={[styles['icon'], `fas fa-${icon}`].join(' ')}></i>
        <input
          formNoValidate
          type="number"
          className={[styles['input'], errorMessage && styles['error']].join(' ')}
          placeholder="0"
          id={formatLabel(label)}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          name={formatLabel(label)}
          required
          min={min}
          step={step}
        />
      </div>
    </div>
  );
}

export default InputField;
