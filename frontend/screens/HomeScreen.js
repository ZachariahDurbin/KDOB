import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Pressable } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import SignInScreen from './SignInScreen'
import SignUpScreen from './SignUpScreen'
import BoardScreen from './BoardScreen'
import DragScreen from './DragScreen'

const HomeScreen = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={tw `bg-red-300 h-full`}>
            <Text style={tw`text-red-500 p-10 w-full text-center`}>
                I am the homescreen
            </Text>
            <Pressable style={tw`flex-wrap`}>
                <Text style={tw`text-purple-900 p-10 bg-blue-300 rounded-md text-center flex-wrap`}
                onPress={() => navigation.navigate(SignUpScreen)}
                >
                    Go to Sign Up
                </Text>
                
            </Pressable>

            <Text style={tw`text-purple-900 p-10`}
            onPress={() => navigation.navigate(SignInScreen)}
            >
                Go to Sign In
            </Text>

            <Text style={tw`text-purple-900 p-10`}
            onPress={() => navigation.navigate(SignInScreen)}
            >
                Go to Sign In
            </Text>
            <Text style={tw`text-purple-900 p-10 bg-blue-300 rounded-md text-center flex-wrap`}
            onPress={() => navigation.navigate(BoardScreen)}
            >
                Go to Board
            </Text>
            <Text style={tw`text-purple-900 p-10 bg-blue-300 rounded-md text-center flex-wrap`}
            onPress={() => navigation.navigate(DragScreen)}
            >
                Go to Drag Testing
            </Text>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
