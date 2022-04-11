import styled from "styled-components/native";

import { Text } from "react-native";

const moodOptions = [
  { emoji: "🧑‍💻", description: "studious" },
  { emoji: "🤔", description: "pensive" },
  { emoji: "😊", description: "happy" },
  { emoji: "🥳", description: "celebratory" },
  { emoji: "😤", description: "frustrated" },
];

export const MoodPicker: React.FC = () => {
  return (
    <Container>
      {moodOptions.map((option) => {
        return (
          <Text key={option.emoji} style={{ fontSize: 24 }}>
            {option.emoji}
          </Text>
        );
      })}
    </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
`;
