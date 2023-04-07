import * as React from 'react';
import {RadioButton} from 'react-native-paper';
import {useContext} from 'react';
import {StepsContext} from '../../../steps/stepsContext/StepsContext';

export type TRadioOption = {
  label: string;
  value: string;
};

type TRadioInputProps = {
  options: TRadioOption[];
  onChange: (option: TRadioOption) => void;
  selectedValue: string;
};

export const RadioInput = ({
  options,
  onChange,
  selectedValue,
}: TRadioInputProps) => {
  const [value, setValue] = React.useState(selectedValue);

  const onValueChange = (value: string) => {
    setValue(value);
    const option = options.find(option => option.value === value);
    option && onChange(option);
  };

  return (
    <RadioButton.Group onValueChange={onValueChange} value={value}>
      {options.map(option => (
        <RadioButton.Item
          key={option.value}
          label={option.label}
          value={option.value}
        />
      ))}
    </RadioButton.Group>
  );
};
