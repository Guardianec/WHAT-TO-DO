import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";


interface TaskProps {
    text: string;
}

export default function ({ text }: TaskProps) {
    return (
        <View className="bg-white p-4 rounded-lg flex-row items-center justify-between mb-5">
            <View className="flex-row items-center flex-wrap">
                <View className="w-6 h-6 bg-blue-500 opacity-40 rounded mr-4" />
                <Text style={styles.text} className="text-xl justify-self-center">{text}</Text>
            </View>
            <View className="w-3 h-3 border-2 border-blue-500 rounded-full" />
        </View>
    );
}
const styles = StyleSheet.create({
    text: {
        maxWidth: '70%',
    },
})