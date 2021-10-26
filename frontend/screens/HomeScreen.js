import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import tw from 'tailwind-react-native-classnames'

const HomeScreen = () => {
    return (
        <SafeAreaView style={tw `bg-red-300 h-full`}>
            <Text style={tw`text-red-500 p-10`}>
                I am the homescreen
            </Text>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
