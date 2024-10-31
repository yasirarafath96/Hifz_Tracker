import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const MainLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Main Hazrat listing", headerShown: true }} />
      <Stack.Screen name="addHazrat" options={{ title: "Add Hazrat", headerShown: true }} />
    </Stack>
  );
};

export default MainLayout;

const styles = StyleSheet.create({});
