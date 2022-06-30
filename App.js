import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

const App = () => {
  return (
    <View style={styles.ContainerStyle}>
      <View>
        <TextInput placeholder='Course Goals...' style={styles.TextInputStyle} />
        <Button title='ADD' style={styles.ButtonStyle}/>
      </View>
      <View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ContainerStyle:{
    padding:50
  },
  TextInputStyle:{
    padding:10,
    fontSize:16,
    borderBottomColor:'black',
    borderBottomWidth:2,
    marginBottom:15
  },
  ButtonStyle:{
    
  }
});

export default App;