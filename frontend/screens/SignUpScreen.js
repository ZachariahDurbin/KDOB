import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, Pressable, TextInput } from 'react-native'
import tw from 'tailwind-react-native-classnames'

const SignUpScreen = () => {
    return (
        <SafeAreaView style={tw`bg-red-300 h-full`}>
            <View style={tw`min-h-full flex items-center justify-center py-12 px-4`}>
                <View style={tw`max-w-md w-full`}>
                    <Text style={tw`mt-6 text-center text-3xl font-extrabold text-gray-900`}>
                        Create Your Account
                    </Text>
                    <Text style={tw`mt-2 text-center text-sm text-gray-600`}>
                        or
                    </Text>
                    <Pressable style={tw`mt-2 text-center text-sm text-gray-600`}>
                        <Text style={tw`font-medium text-indigo-600 text-center`}>
                            Sign In
                        </Text>
                    </Pressable>
                </View>
                <View style={tw`mt-8 `}>
                    <TextInput/>
                    <View style={tw`rounded-md`}>
                        <View>
                            <Text style={tw``}>
                                Email address
                            </Text>
                            <TextInput style={tw`relative w-full px-3 py-2 border border-gray-300 text-gray-900 rounded-md `}/>

                        </View>
                        <View>
                            <Text style={tw``}>
                                Name
                            </Text>
                            <TextInput style={tw`relative w-full px-3 py-2 border border-gray-300 text-gray-900 rounded-md `}/>
                        </View>
                        <View>
                            <Text style={tw``}>
                                Password
                            </Text>
                            <TextInput style={tw`relative w-full px-3 py-2 border border-gray-300 text-gray-900 rounded-md `}/>
                        </View>
                        
                        <Pressable style={tw`mt-4 text-center relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600`}>
                            <Text>
                                Sign Up
                            </Text>
                        </Pressable>
                    </View>
                </View>

            </View>
        </SafeAreaView>
    )
}

export default SignUpScreen

const styles = StyleSheet.create({})
