import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function HomeSCreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>MIDTERM C_yang95632</Text>

      <Text style={styles.subtitle}>ClICK THE BUTTON BELOW TO GO TO EMAIL SCREEN</Text>
      
      <View style={styles.buttonContainer}>
        <Button style={styles.button} color='#000' title="SEND EAMIL" onPress={() => navigation.navigate("SEND EMAIL", { language: "french" })}></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    marginTop: 100,
    marginLeft: 20,
    marginRight: 20,
  },
  subtitle: {
    fontSize: 15,
    marginTop: 120,
    alignItems: 'center',
  },
  button: {
    width: '100%',
    backgroundColor: '#000',
    borderRadius: 0,
    color: '#fff',
  },
  buttonContainer: {
    paddingVertical: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
 }
});
