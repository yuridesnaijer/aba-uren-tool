import React, {useContext} from 'react';
import {View} from 'react-native';
import {StepsContext} from '../stepsContext/StepsContext';
import {
  RadioInput,
  TRadioOption,
} from '../../primitives/input/radio/RadioInput';
import {Typography} from '../../primitives/Typography';

export const TravelStep = () => {
  const {selectedClient} = useContext(StepsContext);

  const onLocationChange = (location: TRadioOption) => {};

  return selectedClient ? (
    <View>
      <RadioInput
        onChange={onLocationChange}
        options={selectedClient.locations.map(location => ({
          label: location.name,
          value: location.name,
        }))}
      />
    </View>
  ) : (
    <View>
      <Typography text="Error: no client selected" />
    </View>
  );
};
