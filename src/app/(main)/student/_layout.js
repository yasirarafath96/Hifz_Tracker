import { Stack } from 'expo-router';

const StudentLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Student List', headerShown: false }} />
    </Stack>
  );
};

export default StudentLayout;
