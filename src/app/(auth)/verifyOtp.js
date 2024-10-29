import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { router } from "expo-router";
import { OtpInput } from "react-native-otp-entry";

const VerifyOtp = () => {
  //   const [otp, setOtp] = useState("");

  const handleVerify = () => {
    router.replace("(main)");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>OTP sent to ${3030}</Text>

      <OtpInput
        numberOfDigits={6}
        focusColor="green"
        focusStickBlinkingDuration={500}
        onTextChange={(text) => console.log(text)}
        onFilled={(text) => console.log(`OTP is ${text}`)}
        textInputProps={{
          accessibilityLabel: "One-Time Password",
        }}
        theme={{
          containerStyle: styles.container,
          pinCodeContainerStyle: styles.pinCodeContainer,
          pinCodeTextStyle: styles.pinCodeText,
          focusStickStyle: styles.focusStick,
          focusedPinCodeContainerStyle: styles.activePinCodeContainer,
        }}
      />

      <TouchableOpacity style={styles.button} onPress={handleVerify}>
        <Text style={styles.buttonText}>Verify OTP</Text>
      </TouchableOpacity>
    </View>
  );
};

export default VerifyOtp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f8f9fa",
  },
  label: {
    fontSize: 18,
    marginBottom: 20,
    color: "#333",
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 20,
  },
  otpInput: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    textAlign: "center",
    fontSize: 18,
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#007BFF",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: "100%",
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});
