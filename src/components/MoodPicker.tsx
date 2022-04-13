import { useCallback, useState } from "react";
import { Text, View } from "react-native";

import styled from "styled-components/native";

import { MoodOptionType } from "../types";

const moodOptions: MoodOptionType[] = [
  { emoji: "🧑‍💻", description: "studious" },
  { emoji: "🤔", description: "pensive" },
  { emoji: "😊", description: "happy" },
  { emoji: "🥳", description: "celebratory" },
  { emoji: "😤", description: "frustrated" },
];

type MoodPickerProps = {
  onSelect: (mood: MoodOptionType) => void;
};

export const MoodPicker: React.FC<MoodPickerProps> = ({ onSelect }) => {
  const [selected, setSelected] = useState<MoodOptionType>();

  const handleOnSelect = useCallback(() => {
    if (selected) {
      onSelect(selected);
      setSelected(undefined);
    }
  }, [onSelect, selected]);

  return (
    <Container>
      <Text style={{ fontWeight: "bold", fontSize: 24, color: "#454C73" }}>
        How are you right now?
      </Text>

      <BoxFeeling>
        {moodOptions.map((option) => {
          return (
            <AvatarSection key={option.emoji}>
              <AvatarBtn
                onPress={() => setSelected(option)}
                style={[
                  option.emoji === selected?.emoji
                    ? {
                        borderWidth: 2,
                        backgroundColor: "#454C73",
                        borderColor: "white",
                      }
                    : undefined,
                ]}
              >
                <Text style={{ fontSize: 24 }}>{option.emoji}</Text>
              </AvatarBtn>

              <Description>
                {option.emoji === selected?.emoji ? option.description : ""}
              </Description>
            </AvatarSection>
          );
        })}
      </BoxFeeling>

      <View style={{ alignItems: "center" }}>
        <Button
          onPress={handleOnSelect}
          style={[selected ? { opacity: 1 } : { opacity: 0.7 }]}
        >
          <ButtonText>Choose</ButtonText>
        </Button>
      </View>
    </Container>
  );
};

const Container = styled.View`
  height: 280px;
  margin: 10px;
  padding: 10px;
  justify-content: space-evenly;
  border: 2px solid #454c73;
  border-radius: 20px;
`;

const BoxFeeling = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
`;

const AvatarSection = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const AvatarBtn = styled.Pressable`
  width: 60px;
  height: 60px;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  margin-bottom: 5px;
`;

const Description = styled.Text`
  color: #454c73;
  font-weight: bold;
  font-size: 10px;
  text-align: center;
`;

const Button = styled.Pressable`
  border-radius: 40px;
  background-color: #454c73;
  width: 150px;
  height: 50px;
  justify-content: center;
  align-items: center;
`;

const ButtonText = styled.Text`
  color: white;
`;
