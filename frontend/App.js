import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { ApolloProvider, useMutation, gql, ApolloCache, ApolloClient } from '@apollo/client';
import { SafeAreaProvider, SafeAreraProvider } from 'react-native-safe-area-context'
import { Provider } from "react-redux";
import { store } from "./store";
import { client } from './apollo';
import HomeScreen from './screens/HomeScreen';
import SignUpScreen from './screens/SignUpScreen';
import SignInScreen from './screens/SignInScreen';
import BoardScreen from './screens/BoardScreen';
import DragScreen from './screens/DragScreen';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const mutation_test = gql`
mutation addUser($name: String!, $email: String!, $password: String!){
  addUser(name: $name, email: $email, password: $password) {
    password
  }
}
`;

export function ApolloBit() {

  const name = "Will Kjellander";
  const email = "will@gmail.com";
  const password = "uh no one saw that last one";
  const [addUser, {data, error, loading}] = useMutation(mutation_test) ;
  
  if(data){
    console.log(data);
  }
  console.log('this is bullshit');
  const onSubmit = () =>{
    addUser({variables: { name, email, password } });
  }
  return(
    <View style={styles.container}>

      <Pressable onPress={onSubmit}>
        <Text>
          press here for test
        </Text>
      </Pressable>
    </View>
  );
}


export default function App() {
  const Stack = createStackNavigator();
  
  return (
    <ApolloProvider client = {client}>
      <Provider store={store}>
        <NavigationContainer>
          <SafeAreaProvider>
            <Stack.Navigator>
              <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                  headerShown: false
                }}
              />
              <Stack.Screen
                name="SignUpScreen"
                component={SignUpScreen}
                options={{
                  headerShown: false
                }}
              />
              <Stack.Screen
                name="SignInScreen"
                component={SignInScreen}
                options={{
                  headerShown: false
                }}
              />
              <Stack.Screen
                name="BoardScreen"
                component={BoardScreen}
                options={{
                  headerShown: false
                }}
              />
              <Stack.Screen
                name="DragScreen"
                component={DragScreen}
                options={{
                  headerShown: false
                }}
              />
            </Stack.Navigator>
          </SafeAreaProvider>
        </NavigationContainer>
      </Provider>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
