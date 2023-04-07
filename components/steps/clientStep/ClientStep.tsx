import React, {useContext} from 'react';
import {ClientList} from '../../clientList/ClientList';
import {TClient} from '../../../types/client';
import {FormAddClient} from '../../addClientForm/FormAddClient';
import {Button, Text} from 'react-native';
import {StyleHeading} from '../../../styles/StyleHeading';
import {StepsContext} from '../stepsContext/StepsContext';
import {NextStepButton} from '../nextStepButton/NextStepButton';

const Clients: TClient[] = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'Piet',
    locations: [{name: 'Delft'}, {name: 'Hellevoetsluis'}],
  },
  {
    id: 'bd7acbea-c1b1-asdf-aed5-3ad53abb28ba',
    name: 'Jan',
    locations: [{name: 'HillegersBerg'}, {name: 'Vierpolders'}],
  },
];

export const ClientStep = () => {
  const {selectedClient} = useContext(StepsContext);

  return (
    <>
      <Text style={StyleHeading.default}>
        Voor welke client heb je gewerkt?
      </Text>
      <ClientList clients={Clients} />
      {/*  TODO: toggle form on butotn click*/}
      <Button title="+" />
      {/*<FormAddClient />*/}
      <NextStepButton isDisabled={selectedClient === null} />
    </>
  );
};
