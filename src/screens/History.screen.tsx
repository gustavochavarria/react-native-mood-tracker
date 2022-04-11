import styled from "styled-components/native"

import {Text} from 'react-native';

export const History: React.FC = () => {
    return (
        <Container>
            <Text>Hola from history</Text>
        </Container>
    )
}

const Container = styled.View`
flex: 1;
`