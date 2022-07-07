import * as React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import COLORS from '../consts/colors';

import { Appbar } from 'react-native-paper';

const HeaderBackAction = ({ goBack, title }) => (
  <TouchableOpacity onPress={goBack}>
    <Appbar.Header style={style.Header}>
      <Appbar.BackAction onPress={goBack} />
      <Appbar.Content title={title} />
    </Appbar.Header>
  </TouchableOpacity>
);

const style = StyleSheet.create({
  Header: {
    backgroundColor: COLORS.black,
  },
});

export default HeaderBackAction;
