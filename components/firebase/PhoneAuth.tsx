import React, { useState, useEffect } from 'react';
import { Button, TextInput, View } from 'react-native';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { SafeAreaView } from 'react-native-safe-area-context';

function PhoneSignIn() {
  const [confirm, setConfirm] = useState<FirebaseAuthTypes.ConfirmationResult | null>(null);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [code, setCode] = useState('');

  function onAuthStateChanged(user: FirebaseAuthTypes.User | null) {
    if (user) {
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  async function signInWithPhoneNumber(phoneNumber: string) {
    auth().settings.appVerificationDisabledForTesting = true
    auth().settings.forceRecaptchaFlowForTesting=false  
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    setConfirm(confirmation);
  }

  async function confirmCode() {
    try {
      if (confirm) {
        await confirm.confirm(code);
      } else {
        console.log('Confirmation is null.');
      }
    } catch (error) {
      console.log('Invalid code.');
    }
  }

  if (!confirm) {
    return (
      <View style={{ flex: 1 }}>
        <SafeAreaView style={{ flex: 1 }}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TextInput
              placeholder="Enter phone number"
              keyboardType="phone-pad"
              style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, width: '80%', paddingHorizontal: 10 }}
              onChangeText={(text) => setPhoneNumber(text)}
            />
            <Button
              title="Send OTP"
              onPress={() => signInWithPhoneNumber(phoneNumber)}
            />
          </View>
        </SafeAreaView>
      </View>

    );
  }

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>

        <TextInput value={code} onChangeText={text => setCode(text)} />
        <Button title="Confirm Code" onPress={() => confirmCode()} />
      </SafeAreaView>
    </View>


  );
}
export default PhoneSignIn;