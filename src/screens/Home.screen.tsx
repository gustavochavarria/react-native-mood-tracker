import styled from "styled-components/native";
import { useCallback, useState } from "react";

import { Text } from "react-native";
import { MoodPicker } from "../components/MoodPicker";

import { MoodOptionType, MoodOptionWithTimestamp } from "../types";

export const Home: React.FC = () => {
  const [moodList, setMoodList] = useState<MoodOptionWithTimestamp[]>([]);

  const handleSelectMood = useCallback((mood: MoodOptionType) => {
    setMoodList((current) => [...current, { mood, timestamp: Date.now() }]);
  }, []);

  return (
    <Container>
      <MoodPicker onSelect={handleSelectMood} />

      {moodList.map((item) => {
        return (
          <Text key={item.timestamp}>
            {item.mood.emoji} {new Date(item.timestamp).toString()}
          </Text>
        );
      })}
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  justify-content: center;
`;
