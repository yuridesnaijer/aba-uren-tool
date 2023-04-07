import {Button} from 'react-native';
import React, {useContext} from 'react';
import {StepsContext} from '../stepsContext/StepsContext';

type TNextStepButtonProps = {
  isDisabled: boolean;
};

export const NextStepButton = ({isDisabled}: TNextStepButtonProps) => {
  const {setActiveStepIndex, activeStepIndex, selectedClient} =
    useContext(StepsContext);

  const onNextStepButtonPressed = () => {
    setActiveStepIndex(activeStepIndex + 1);
  };
  return (
    <Button
      disabled={isDisabled}
      onPress={onNextStepButtonPressed}
      title="Volgende"
    />
  );
};
