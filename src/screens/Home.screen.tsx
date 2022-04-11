import styled from "styled-components/native";
import { MoodPicker } from "../components/MoodPicker";

export const Home: React.FC = () => {
  return (
    <Container>
      <MoodPicker />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  justify-content: center;
`;
