import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

const App = () => {
  return (
    <View style={styles.ContainerStyle}>
      <View style={styles.FlexBoxStyle}>
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
    marginBottom:15,
    width:'75%'
  },
  FlexBoxStyle:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  }
});

export default App;