import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {Typography} from '../../primitives/Typography';
import {NextStepButton} from '../nextStepButton/NextStepButton';

export const TimeBookingStep = () => {
  const [date, setDate] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [open, setOpen] = useState(false);

  const millisecondsToTime = (milliseconds: number) => {
    const timeInMinutes = milliseconds / 1000 / 60;
    const timeInHours = timeInMinutes / 60;

    const minutes = timeInMinutes % 60;
    const hours = timeInHours % 24;

    return `${Math.floor(hours)}:${Math.round(minutes)}`;
  };

  return (
    <View>
      <Button title="Vandaag" onPress={() => setOpen(true)} />
      <DatePicker
        modal
        open={open}
        date={date}
        mode="date"
        onConfirm={date => {
          setOpen(false);
          setDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
      <Typography text="startTijd" />
      <DatePicker
        mode="time"
        locale="nl-NL"
        is24hourSource="locale"
        date={startTime}
        onDateChange={setStartTime}
      />
      <Typography text="eindTijd" />
      <DatePicker
        mode="time"
        locale="nl-NL"
        is24hourSource="locale"
        date={endTime}
        onDateChange={setEndTime}
      />

      <Typography
        text={`Gewerkte tijd: ${millisecondsToTime(
          endTime.getTime() - startTime.getTime(),
        )}`}
      />
      <NextStepButton
        isDisabled={endTime.getTime() - startTime.getTime() === 0}
      />
    </View>
  );
};
