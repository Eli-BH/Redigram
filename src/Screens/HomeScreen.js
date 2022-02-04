import { StyleSheet, Text, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { getHotPosts, hotContentSelector } from "../Redux/hotContent";
import React, { useEffect } from "react";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const { content, error, loading } = useSelector(hotContentSelector);

  useEffect(() => {
    dispatch(getHotPosts());
  }, []);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      {loading ? (
        <Text>Loading</Text>
      ) : error ? (
        <Text>{error}</Text>
      ) : (
        <FlatList />
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
