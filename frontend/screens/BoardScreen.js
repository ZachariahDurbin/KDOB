import React from 'react'
import { useMutation, gql } from '@apollo/client'
import { StyleSheet, View, SafeAreaView, Text, ImageBackground, Pressable  } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import DraggingItemTesting from "./DraggingItemTesting";

const mutation_test = gql`
mutation newBoard($player1: String!, $player2: String!){
  newBoard(player1: $player1, player2: $player2) {
    id,
    board{
        amount
    }
  }
}
`;
const STUFF = () => <DraggingItemTesting/>

const BoardScreen = () => {
    const player1 = "Zachariah";
    const player2 = "Will";
    const [newBoard, {data, error, loading}] = useMutation(mutation_test) ;
    
    if(data){
        for(var i = 0; i < data.newBoard.board.length; i++){
            console.log(data.newBoard.board[i].amount);
        }
        const newThing = React.createElement(DraggingItemTesting)
        
        ReactDOM.render(
            newThing,
        )
    }
    const startGame = () =>{
      newBoard({variables: { player1, player2} });
    }
    return (
        <SafeAreaView style={{height: '100%'}}>
            <View style={ styles.grid}>
                <View style={styles.dark} id="haha">
                    <DraggingItemTesting style={{backgroundColor:"#333333"}}/>
                    <DraggingItemTesting />
                    <DraggingItemTesting />
                </View>
                <View style={tw`bg-purple-500`, styles.pale}></View>
                <View style={tw`bg-purple-500`, styles.dark}></View>
                <View style={tw`bg-purple-500`, styles.pale}></View>
                <View style={tw`bg-purple-500`, styles.dark}></View>
                <View style={tw`bg-purple-500`, styles.pale}></View>
                <View style={tw`bg-purple-500`, styles.board}></View>
                <View style={tw`bg-purple-500`, styles.dark}></View>
                <View style={tw`bg-purple-500`, styles.pale}></View>
                <View style={tw`bg-purple-500`, styles.dark}></View>
                <View style={tw`bg-purple-500`, styles.pale}></View>
                <View style={tw`bg-purple-500`, styles.dark}></View>
                <View style={tw`bg-purple-500`, styles.pale}></View>
                <View style={tw`bg-purple-500`, styles.pale}></View>
                <View style={tw`bg-purple-500`, styles.dark}></View>
                <View style={tw`bg-purple-500`, styles.pale}></View>
                <View style={tw`bg-purple-500`, styles.dark}></View>
                <View style={tw`bg-purple-500`, styles.pale}></View>
                <View style={tw`bg-purple-500`, styles.dark}></View>
                <View style={tw`bg-purple-500`, styles.board}></View>
                <View style={tw`bg-purple-500`, styles.pale}></View>
                <View style={tw`bg-purple-500`, styles.dark}></View>
                <View style={tw`bg-purple-500`, styles.pale}></View>
                <View style={tw`bg-purple-500`, styles.dark}></View>
                <View style={tw`bg-purple-500`, styles.pale}></View>
                <View style={tw`bg-purple-500`, styles.dark}></View>
            </View>
            <Pressable onPress={startGame}>
                <Text style={tw`text-center `}>
                    Start Game
                </Text>
            </Pressable>
                
        </SafeAreaView>
    )
}

export default BoardScreen

const styles = StyleSheet.create({
    grid: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        height: '100%'

    },
    gridItem: {
        padding: 33
    },
    pale: {
        zIndex: -1,
        elevation: -1,
        width: '7.5%',
        height: '50%',
        backgroundColor: "#0abaab"
    },
    dark: {
        zIndex: -1,
        elevation: -1,
        width: '7.5%',
        backgroundColor: "#056556"
    },
    board: {
        zIndex: -1,
        elevation: -1,
        width: '7.5%',
        backgroundColor: "#664228"
    }


})
