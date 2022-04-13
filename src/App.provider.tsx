import React, { useCallback, useContext, useEffect, useState } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { MoodOptionType, MoodOptionWithTimestamp } from "./types";

type AppContextType = {
  moodList: MoodOptionWithTimestamp[];
  handleSelectMood: (mood: MoodOptionType) => void;
  handleDeleteMood: (mood: MoodOptionWithTimestamp) => void;
};

type AppData = {
  moods: MoodOptionWithTimestamp[];
};

const defaultValue = {
  moodList: [],
  handleSelectMood: () => {},
  handleDeleteMood: () => {},
};

const KEY = "my-app-data";

const getAppData = async (): Promise<AppData | null> => {
  try {
    const data = await AsyncStorage.getItem(KEY);

    if (data) {
      return JSON.parse(data);
    }

    return null;
  } catch {
    return null;
  }
};

const setAppData = async (newData: AppData) => {
  try {
    await AsyncStorage.setItem(KEY, JSON.stringify(newData));
  } catch {}
};

const AppContext = React.createContext<AppContextType>(defaultValue);

export const AppProvider: React.FC = ({ children }) => {
  const [moodList, setMoodList] = useState<MoodOptionWithTimestamp[]>([]);

  const handleSelectMood = useCallback((mood: MoodOptionType) => {
    setMoodList((current) => {
      const newValue = [...current, { mood, timestamp: Date.now() }];

      setAppData({ moods: newValue });

      return newValue;
    });
  }, []);

  const handleDeleteMood = useCallback((mood: MoodOptionWithTimestamp) => {
    setMoodList((current) => {
      const newValue = current.filter(
        ({ timestamp }) => timestamp !== mood.timestamp
      );

      setAppData({ moods: newValue });

      return newValue;
    });
  }, []);

  useEffect(() => {
    const getDataFromStorage = async () => {
      const data = await getAppData();

      if (data) {
        setMoodList(data.moods);
      }
    };

    getDataFromStorage();
  }, []);

  return (
    <AppContext.Provider
      value={{ moodList, handleSelectMood, handleDeleteMood }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
