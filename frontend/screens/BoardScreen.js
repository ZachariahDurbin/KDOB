import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, ImageBackground  } from 'react-native'
import tw from 'tailwind-react-native-classnames'

const BoardScreen = () => {
    return (
        <SafeAreaView style={tw`bg-red-300 h-full`}>
            <ImageBackground  resizeMode="cover" source = {{uri: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fyesofcorsa.com%2Fwp-content%2Fuploads%2F2017%2F04%2FBackgammon-Desktop-Wallpaper-HD.jpg&f=1&nofb=1'}}>
            <Text>fffff</Text>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default BoardScreen

const styles = StyleSheet.create({})
