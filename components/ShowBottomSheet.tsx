
import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import { View, Text, StyleSheet, Pressable, Animated } from 'react-native';
const ShowBottomSheet = () => {

    const translateY = useRef(new Animated.Value(300)).current;

    useEffect(() => {
        Animated.timing(translateY, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
        }).start();
    }, []);

    return (
        <Animated.View style={{ transform: [{ translateY }] }}>
            <Text>Bottom Sheet</Text>
        </Animated.View>
    );
}

export default ShowBottomSheet;