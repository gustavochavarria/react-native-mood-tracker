import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import styled from 'styled-components/native'

export default function App() {
  return (
    <Container>
      <Text>Hola mundo!</Text>
      <StatusBar style="auto" />
    </Container>
  );
}

const Container = styled.View`
flex: 1;
background-color: #fff;
align-items: center;
justify-content: center;
`;