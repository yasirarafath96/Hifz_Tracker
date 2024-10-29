import React from "react";
import { Stack } from "expo-router";

const AuthRoot = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Welcome", headerShown: false }} />
      <Stack.Screen name="login" options={{ title: "Login", headerShown: false}} />
      <Stack.Screen name="verifyOtp" options={{ title: "Verify OTP" }} />
    </Stack>
  );
};

export default AuthRoot;
