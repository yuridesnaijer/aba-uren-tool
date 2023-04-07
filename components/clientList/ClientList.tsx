import {FlatList, StyleSheet} from 'react-native';
import React, {useContext} from 'react';
import {TClient} from '../../types/client';
import {StyleCard} from '../../styles/StyleCard';
import {RadioInput, TRadioOption} from '../primitives/input/radio/RadioInput';
import {StepsContext} from '../steps/stepsContext/StepsContext';
import {Typography} from '../primitives/Typography';

type TClientListProps = {
  clients: TClient[];
};

export const ClientList = ({clients}: TClientListProps) => {
  const {setSelectedClient, selectedClient} = useContext(StepsContext);

  if (!selectedClient) {
    return <Typography text="error, no client selected" />;
  }

  const onClientChange = (option: TRadioOption) => {
    const client = clients.find(client => client.id === option.value);
    client && setSelectedClient(client);
  };

  return (
    <>
      <RadioInput
        selectedValue={selectedClient.id}
        options={clients.map(client => ({
          value: client.id,
          label: client.name,
        }))}
        onChange={onClientChange}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: StyleCard.default,
});
