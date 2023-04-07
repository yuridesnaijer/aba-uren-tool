import React from 'react';
import {Text} from 'react-native';

type TTypographyProps = {
  text: string;
};

export const Typography = ({text}: TTypographyProps) => {
  return <Text>{text}</Text>;
};
