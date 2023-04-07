import React, {useContext} from 'react';
import {StepsContext} from '../stepsContext/StepsContext';
import {Button, Text, View} from 'react-native';
import {ClientStep} from '../clientStep/ClientStep';
import {TimeBookingStep} from '../timeBookingStep/TimeBookingStep';
import {TravelStep} from '../travelStep/TravelStep';

export const StepsContainer = () => {
  const {activeStepIndex, setActiveStepIndex} = useContext(StepsContext);

  const onPreviousButtonPressed = () => {
    setActiveStepIndex(activeStepIndex - 1);
  };

  const stepComponentsList = [
    <ClientStep />,
    <TimeBookingStep />,
    <TravelStep />,
  ];

  return (
    <View>
      {activeStepIndex > 0 ? (
        <Button onPress={onPreviousButtonPressed} title="vorige" />
      ) : null}
      <Text>{activeStepIndex}</Text>
      {stepComponentsList[activeStepIndex]}
    </View>
  );
};
