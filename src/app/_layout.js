import React, { useState } from "react";
import { Stack, Redirect } from "expo-router";

const RootLayout = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <Stack>
      {isLogin ? (
        <Stack.Screen name="(main)" options={{ headerShown: true, title: 'main' }} />
      ) : (
        <Stack.Screen name="(auth)" options={{ headerShown: true, title: 'auth' }} />
      )}
    </Stack>
  );
};

export default RootLayout;
