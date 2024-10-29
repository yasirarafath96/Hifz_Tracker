import { View, Text, SafeAreaView, TouchableOpacity, ActivityIndicator, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { router } from "expo-router";

const AuthIndex = () => {
    const [loading, setLoading] = useState(false)

    useEffect( () => {
        setTimeout(() => {
            Loading_timeout();
        }, 2000)
    }, [])

    let Loading_timeout = () => {
        setLoading(true);
        setTimeout(() => {
            router.push('(auth)/login')
        }, 4000)
    }

  return (
    <>
      <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>App</Text>
        <Text style={styles.subtitle}>Hifz Tracker</Text>
        <Text style={styles.text}>Managed by Group</Text>

        <TouchableOpacity style={styles.button} onPress={() => router.push('(auth)/login')}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>

        {loading ? <ActivityIndicator style={styles.loader} size="large" color="#000" /> : null}
      </View>
    </SafeAreaView>
    </>
  );
};

export default AuthIndex;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#f8f9fa",
    },
    content: {
      padding: 20,
      alignItems: "center",
    },
    title: {
      fontSize: 32,
      fontWeight: "bold",
      marginBottom: 10,
      color: "#333",
    },
    subtitle: {
      fontSize: 24,
      fontWeight: "600",
      marginBottom: 10,
      color: "#555",
    },
    text: {
      fontSize: 18,
      marginBottom: 20,
      color: "#777",
    },
    button: {
      backgroundColor: "#007BFF",
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
    },
    buttonText: {
      color: "#fff",
      fontSize: 18,
      fontWeight: "600",
    },
    loader: {
      marginTop: 20,
    },
  });