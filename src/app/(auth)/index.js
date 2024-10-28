import { View, Text, SafeAreaView } from "react-native";
import React from "react";

const AuthIndex = () => {
  return (
    <>
      <SafeAreaView>
        <View style={{backgroundColor: 'green', flexDirection: 'column'}}>
          <View>
            <Text>App</Text>
          </View>
          <View>
            <Text>Hifz Tracker</Text>
          </View>
          <View>
            <Text>Managed by Group</Text>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default AuthIndex;
