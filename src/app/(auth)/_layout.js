import React from "react";
import { Stack } from "expo-router";

const AuthRoot = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Welcome" }} />
      <Stack.Screen name="login" options={{ title: "Login" }} />
      <Stack.Screen name="verifyotp" options={{ title: "Verify OTP" }} />
    </Stack>
  );
};

export default AuthRoot;
