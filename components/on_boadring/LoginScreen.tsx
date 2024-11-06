import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useRef } from 'react'
import ShowBottomSheet from '../ShowBottomSheet'; // Ensure this path is correct and the component is properly exported and accepts bottomSheetRef as a prop
const LoginScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>

      <View style={{ alignItems: 'center', }}>
        
        <Text style={{ fontWeight: 'bold', fontSize: 24 }}>Sign In</Text>
      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start', paddingHorizontal: 20 }}>
        <Text style={{ fontSize: 16, marginBottom: 10 }}>Please enter your 10 digit mobile number</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderRadius: 10, padding: 10 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>+91</Text>
          <TextInput
            style={{ flex: 1, fontSize: 18, fontWeight: 'bold', marginLeft: 10 }}
            keyboardType="numeric"
            maxLength={10}
            placeholder="Mobile Number"
          />
        </View>

        <TouchableOpacity
          style={{
            width: '100%',
            backgroundColor: 'blue',
            padding: 15,
            borderRadius: 10,
            marginTop: 20,
            alignItems: 'center',
          }}
          // onPress={() => bottomSheetRef.current?.expand()}
        >
          <Text style={{ color: 'white', fontSize: 16 }}>Send OTP</Text>
        </TouchableOpacity>
        <ShowBottomSheet>
          
        </ShowBottomSheet>
      

      </View>
    



    </SafeAreaView>
  )
}



export default LoginScreen

