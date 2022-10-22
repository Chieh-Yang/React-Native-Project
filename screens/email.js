import React, {useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert } from 'react-native';
import * as SMS from 'expo-sms'
import * as MailComposer from 'expo-mail-composer'
    

export default function HomeSCreen() {
    [message, setMessage] = useState();

    onChangeHandler = (value) => {
        setMessage(value);
    }

    sendMessageWithSMS = async () => {
        const isAvailable = await SMS.isAvailableAsync();
        if (isAvailable) {
            const { result } = await SMS.sendSMSAsync(
                ['1231231234', '2342342345'],
                message
            );
            console.loh(result);
        } else {
            Alert.alert("SMS is not available!");
        } 
    }

    sendMessageWithEmail = async () => {
        Alert.alert('You email has been sent!');
        const isAvailable = await MailComposer.isAvailableAsync();
        
        if(isAvailable) {
          var options = {
            recipients: ['c_yang95632@fanshaweonline.ca'],
            subject: 'My Subject Line',
            body: message
          };
    
          MailComposer.composeAsync(options).then((result) => { console.log(result.status); });
        } else {
          console.log("Email is not available on this device");
        }
      }


    return (
      <View style={styles.container}>
        <Text style={styles.title}>EMAIL</Text>
        <TextInput 
            style={styles.textInput}
            placeholder='Enter the Message' 
        ></TextInput>
        <Text style={styles.title}>MESSAGE</Text>
        <TextInput 
            style={styles.message}
            placeholder='Enter the Message'
        ></TextInput>
        <View style={styles.buttonContainer}>
        <Button style={styles.button} color='#000' title="SEND EAMIL" onPress={sendMessageWithEmail} />
      </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 20,
        margin: 50,
    },
    textInput: {
        height: 30,
        borderColor: '#000',
        borderWidth: 3,
        marginBottom: 15,
        marginLeft: 30,
        marginRight: 30,
        paddingVertical: 2,
        textAlignVertical: 'top',
    },
    message: {
        height: 200,
        borderColor: '#000',
        borderWidth: 3,
        marginBottom: 15,
        marginLeft: 30,
        marginRight: 30,
        paddingVertical: 2,
        textAlignVertical: 'top',
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