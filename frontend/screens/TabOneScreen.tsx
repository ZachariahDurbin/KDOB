import * as React from 'react';
import { Pressable, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { useMutation, gql } from '@apollo/client';

const mutation_test = gql`
mutation addUser($name: String!, $email: String!, $password: String!){
  addUser(name: $name, email: $email, password: $password) {
    password
  }
}
`;


export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {


  const name = "Will Kjellander";
  const email = "will@gmail.com";
  const password = "uh no one saw that last one";
  const [addUser, {data, error, loading}] = useMutation(mutation_test);
  
  if(data){
    console.log(data);
  }
  
  const onSubmit = () =>{
    addUser({variables: { name, email, password } });
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Pressable onPress={onSubmit}>
        <Text>
          press here for test
        </Text>
      </Pressable>
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
