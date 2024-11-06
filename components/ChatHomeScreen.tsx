import React, { useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, TextInput, SafeAreaView } from 'react-native';
import { messagesData, Message } from './constants';
import { SwipeListView } from 'react-native-swipe-list-view';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import * as App from '../App';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
type Avatar = {
    id: string;
    name: string;
};
let userName = "Alekh"
let pageTitle = "Chat"
let user = "../assets/user.png"

type HomeProps = NativeStackScreenProps<App.RootStackParamList,'Home'>


const avatarData = [
    { id: '1', name: 'Alekh', },
    { id: '2', name: 'Rishabh', },
    { id: '3', name: 'Rahul', },
    { id: '4', name: 'Jay', },
    { id: '5', name: 'Mayank', },
    { id: '6', name: 'Roshan', },
    { id: '7', name: 'Riya', },

];

const renderAvatar = ({ item }: { item: Avatar }) => (
    <View style={styles.avatarContainer}        >
        <Image source={require(user)} style={styles.avatar} />
        <Text style={styles.avatarName}>{item.name}</Text>
    </View>
);
const renderMessageRow = (data: { item: Message }) => (
    <View style={styles.messageContainer}>
        <View style={styles.messageInfo}>
            <View style={styles.messageTextContainer}>
                <Text style={styles.messageName}>{data.item.name}</Text>
                <Text style={styles.messageText}>{data.item.message}</Text>
            </View>
        </View>
        <View style={styles.messageMeta}>
            <Text style={styles.messageTime}>{data.item.time}</Text>
            {data.item.unreadMessages > 0 && (
                <View style={styles.unreadContainer}>
                    <Text style={styles.unreadCount}>{data.item.unreadMessages}</Text>
                </View>
            )}
        </View>
    </View>
);
const handleDelete = (rowKey: string) => {
};


const renderHiddenItem = (data: { item: Message }) => (
    <View style={styles.rowBack}>
        <TouchableOpacity
            style={styles.deleteButton}
            onPress={() => handleDelete(data.item.id)}
        >
            <Text style={styles.deleteButtonText}>Delete</Text>
        </TouchableOpacity>
    </View>
);


const ChatScreen = ({ navigation }: HomeProps) => {
    const [searchQuery, setSearchQuery] = useState("")
    const filteredMessages = messagesData.filter((message) =>
        message.name?.toLowerCase().includes(searchQuery?.toLowerCase())
    );
    const clearText = () => {
        setSearchQuery('');
    };
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flexDirection: 'column' }}>
                <View style={styles.header}>
                    <Text style={styles.greeting}>Hello {userName},</Text>
                    <View style={styles.search}>
                        <Text style={styles.title}>{pageTitle}</Text>
                    </View>
                </View>

                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder="Type a message..."
                        value={searchQuery}
                        onChangeText={setSearchQuery}
                        cursorColor={'#000'}
                        style={{ flex: 1 }}
                    />
                    {searchQuery.length > 0 && (
                        <MaterialCommunityIcons size={20} name='close' color={'#000'} onPress={clearText} />
                    )}
                </View>
                <View style={{ padding: 12 }}>
                    <Text>Frequently Contacted</Text>
                    <FlatList
                        horizontal
                        data={avatarData}
                        renderItem={renderAvatar}
                        keyExtractor={item => item.id}
                        contentContainerStyle={styles.avatarList}
                    />
                </View>

                <Text style={{ paddingVertical: 10 }}>Recent</Text>

                <SwipeListView
                    data={filteredMessages}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => {
                            navigation.navigate("UserChatScreen", { initialMessages: item })
                        }}>
                            {renderMessageRow({ item })}
                        </TouchableOpacity>
                    )}
                    renderHiddenItem={renderHiddenItem}
                    rightOpenValue={-75}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={styles.messageList}
                    style={{ marginBottom: 10 }}
                    automaticallyAdjustKeyboardInsets={true}
                    persistentScrollbar={true}
                    overScrollMode={'auto'}
                />
            </View>
            <TouchableOpacity style={styles.fab} onPress={() => { /* Handle FAB press */ }}>
                <MaterialCommunityIcons name="plus" size={24} color="white" />

            </TouchableOpacity>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    fab: {
        position: 'absolute',
        padding: 15,
        right: 20,
        bottom: 50,
        backgroundColor: "black",

        borderRadius: 30


    },
    textInput: {
        margin: 8,
        padding: 8,
        flex: 1,
        fontSize: 18,
        color: '#000'
    },
    container: {
        paddingHorizontal: 20,
        flexDirection: 'column',
        flex: 1
    },
    header: {

    },
    greeting: {
        fontSize: 16,
        color: '#666',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    avatarList: {
        paddingVertical: 12,
        alignContent: 'flex-start',
        alignItems: 'flex-start'
    },
    avatarContainer: {
        alignItems: 'center',
        marginRight: 20,
        flexWrap: 'wrap'
    },
    clearButton: {
        paddingHorizontal: 8,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 30,
        backgroundColor: '#2B2B52'
    },
    avatarName: {
        marginTop: 8,
        fontSize: 14,
        fontWeight: '500',
    },
    searchContainer: {
        alignItems: 'center',
        marginBottom: 30,
    },
    searchIcon: {
        width: 20,
        height: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 8,
        paddingVertical: 10,


    },
    searchText: {
        marginTop: 8,
        fontSize: 14,
    },
    messageContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

        padding: 8,
        backgroundColor: '#F5F5F5',
        borderRadius: 10,

    },
    messageInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    messageAvatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 15,
    },
    messageTextContainer: {
        maxWidth: '70%',
    },
    messageName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    messageText: {
        fontSize: 14,
        color: '#666',

    },
    messageMeta: {
        alignItems: 'flex-end',
    },
    messageTime: {
        fontSize: 12,
        color: '#999',
        marginBottom: 10,
    },
    unreadContainer: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: '#1E90FF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    unreadCount: {
        color: '#FFF',
        fontSize: 12,
    },
    search: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    messageList: {
        paddingTop: 8,

    },
    rowBack: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingRight: 20,
    },
    deleteButton: {
        backgroundColor: '#FF6347',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        padding: 10
    },
    deleteButtonText: {
        color: '#FFF',
        fontWeight: 'bold',
    },
});

export default ChatScreen;
