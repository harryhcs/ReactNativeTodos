
import { useEffect } from "react";
import AsyncStorage from '@react-native-community/async-storage';

storeData = async (key, value) => {
  try {
    AsyncStorage.setItem(key, value)
  } catch (e) {
    console.error(e)
  }
}

export const usePersistedContext = (context, key) => {
  // const ctx = await AsyncStorage.getItem(key).then(data => {
  //   return data ? JSON.parse(data) : context;
  // }) 
  return context;
}

export const usePersistedReducer = ([state, dispatch], key) => {
  useEffect(() => {
    storeData = async (key, value) => {
      try {
        AsyncStorage.setItem(key, value)
      } catch (e) {
        console.error(e)
      }
    }
    storeData();
  }, [state]);
  return [state, dispatch];
}