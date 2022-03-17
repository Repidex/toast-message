import React from 'react';
import {View, StyleSheet, Button, StatusBar} from 'react-native';
import Toast from 'react-native-toast-message';

const ToastMessage = () => {

  const handleSubmitPress = (props) => {
    Toast.show({
      text1: 'Error occured',
      text2:'Please try again after sometimes.',
      type: 'error',
    })
  };

  return (
    <View style={styles.container}>
      <View style={{margin: 20}}>
        <Button title="Toast" onPress={() => handleSubmitPress()} />
      </View>
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: StatusBar.currentHeight,
    backgroundColor: '#AF2B42',
  },
});

export default ToastMessage;
