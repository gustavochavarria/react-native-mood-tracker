import { ScrollView } from "react-native";

import { useAppContext } from "../App.provider";
import { MoodItemRow } from "../components/MoodItemRow";

export const History: React.FC = () => {
  const appContext = useAppContext();

  return (
    <ScrollView>
      {appContext.moodList.map((item) => {
        return <MoodItemRow item={item} key={item.timestamp} />;
      })}
    </ScrollView>
  );
};
