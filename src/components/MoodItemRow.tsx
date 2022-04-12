import React from "react";
import { format } from "date-fns";
import styled from "styled-components/native";

import { MoodOptionWithTimestamp } from "../types";

type MoodItemProps = {
  item: MoodOptionWithTimestamp;
};

export const MoodItemRow: React.FC<MoodItemProps> = ({ item }) => {
  const formatTimestamp = (time: number) => {
    return format(new Date(time), "dd MMM, yyyy 'at' hh:mm aaa");
  };

  return (
    <MoodItem>
      <IconAndDescription>
        <MoodValue>{item.mood.emoji}</MoodValue>
        <MoodDescription>{item.mood.description}</MoodDescription>
      </IconAndDescription>

      <MoodDate>{formatTimestamp(item.timestamp)}</MoodDate>
    </MoodItem>
  );
};

const MoodItem = styled.View`
  background-color: white;
  margin-bottom: 10px;
  padding: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const IconAndDescription = styled.View`
  font-size: 18px;
  color: #87677b;
  font-weight: bold;
`;

const MoodValue = styled.Text`
  text-align: center;
  font-size: 40px;
  margin-right: 10px;
`;

const MoodDescription = styled.Text`
  font-size: 18px;
  color: purple;
  font-weight: bold;
`;

const MoodDate = styled.Text`
  text-align: center;
  color: #87677b;
`;
