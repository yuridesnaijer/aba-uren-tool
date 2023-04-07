import {Text, TextInput, View} from 'react-native';
import React from 'react';
import {StyleCard} from '../../styles/StyleCard';
import {StyleHeading} from '../../styles/StyleHeading';

export const FormAddClient = () => {
  return (
    <View style={StyleCard.default}>
      <Text style={StyleHeading.default}>Nieuwe client toevoegen</Text>
      <TextInput placeholder="Client name" />
    </View>
  );
};
