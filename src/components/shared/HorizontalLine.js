import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const HorizontalLine = ({color}) => {
  return (
    <View
      style={{
        borderBottomColor:color|| 'black',
        borderBottomWidth: StyleSheet.hairlineWidth,
      }}
    />
  );
};

export default HorizontalLine;

const styles = StyleSheet.create({});
