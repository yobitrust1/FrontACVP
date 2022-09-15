import React from 'react';
//import { TextInput } from 'react-native-paper';

import tailwind from 'tailwind-rn';
import { Text, View, TextInput, StyleSheet } from 'react-native';
const FormInput = (props) => {
  return (


    <View style={tailwind("items-center")}>
    <View style={styles.row}>
    <Text style={tailwind("py-6 mx-2 ")}>          </Text>
      <TextInput class="form-control" style={tailwind('border  border-blue-800 my-3  rounded-md w-1/3 h-10')}
        selectTextOnFocus
        placeholder={props.placeholder1}
        onChangeText={(text) => props.onChangeText1(text)} />
      <Text style={tailwind("py-6 mx-2 ")}>/</Text>
      <TextInput class="form-control" style={tailwind('border  border-blue-800 my-3  rounded-md w-1/3 h-10')}
        selectTextOnFocus
        placeholder={props.placeholder2}
        onChangeText={(text) => props.onChangeText2(text)} />
    </View>
</View>

  );
};

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: "row",
    padding: 10
  },
});

export default FormInput;
