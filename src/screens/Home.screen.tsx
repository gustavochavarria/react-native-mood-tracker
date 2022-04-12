import styled from "styled-components/native";
import { MoodPicker } from "../components/MoodPicker";

import { useAppContext } from "../App.provider";

export const Home: React.FC = () => {
  const appContext = useAppContext();

  return (
    <Container>
      <MoodPicker onSelect={appContext.handleSelectMood} />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  justify-content: center;
`;
