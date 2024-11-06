import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {  TextInput, Button } from 'react-native'
import { useState } from 'react'
import { Message } from './constants';
import { NativeStackScreenProps } from '@react-navigation/native-stack';


import * as App from '../App';
type ConversationProps = NativeStackScreenProps<App.RootStackParamList,'UserChatScreen'>
const UserChatScreen = (navigation:ConversationProps) => {
    const [messages, setMessages] = useState<Message>(navigation.route.params.initialMessages)
    const [inputText, setInputText] = useState('')

    const handleSend = () => {
        if (inputText.trim()) {
            navigation.route.params.initialMessages.message=inputText
            setMessages(messages)
            setInputText('')
        }
    }

    return (
        <View style={styles.container}>
          <View>
            {renderItem({item:messages})}
          </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    value={inputText}
                    onChangeText={setInputText}
                    placeholder="Type a message"
                />
                <Button title="Send" onPress={handleSend} />
            </View>
        </View>
    )
}




const renderItem = ({ item }: { item: Message }) => (
    <View style={styles.message}>
        <Text>{item.message}</Text>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
    },
    message: {
        padding: 10,
        backgroundColor: '#f1f1f1',
        marginVertical: 5,
        borderRadius: 5,
    },
    inputContainer: {
        flexDirection: 'row',
        padding: 10,
        borderTopWidth: 1,
        borderColor: '#ccc',
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
    },
})


export default UserChatScreen