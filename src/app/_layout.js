import React, { useState } from "react";
import { Stack, Redirect } from "expo-router";

const RootLayout = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <Stack>
      {isLogin ? (
        <Stack.Screen name="(main)/index" options={{ headerShown: false }} />
      ) : (
        <Stack.Screen name="(auth)/index" options={{ headerShown: false }} />
      )}
    </Stack>
  );
};

export default RootLayout;
