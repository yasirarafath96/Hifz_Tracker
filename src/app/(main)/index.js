import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Avatar, Button, Card, Text as PaperText } from "react-native-paper";
import { router } from "expo-router";

const MainIndex = () => {
  const data = {
    hazrat1: {
      id: 1,
      name: "mujahid",
      number_of_students: 10,
      class_number: 101,
    },
    hazrat2: {
      id: 2,
      name: "qasim",
      number_of_students: 12,
      class_number: 102,
    },
    hazrat3: {
      id: 3,
      name: "bilal",
      number_of_students: 15,
      class_number: 103,
    },
    hazrat4: {
      id: 4,
      name: "khalid",
      number_of_students: 9,
      class_number: 104,
    },
    hazrat5: {
      id: 5,
      name: "umar",
      number_of_students: 8,
      class_number: 105,
    },
    hazrat6: {
      id: 6,
      name: "yaseen",
      number_of_students: 11,
      class_number: 106,
    },
    hazrat7: {
      id: 7,
      name: "tariq",
      number_of_students: 14,
      class_number: 107,
    },
    hazrat8: {
      id: 8,
      name: "ahmed",
      number_of_students: 13,
      class_number: 108,
    },
    hazrat9: {
      id: 9,
      name: "hassan",
      number_of_students: 10,
      class_number: 109,
    },
    hazrat10: {
      id: 10,
      name: "imran",
      number_of_students: 12,
      class_number: 110,
    },
    hazrat11: {
      id: 11,
      name: "hamza",
      number_of_students: 10,
      class_number: 111,
    },
  };

  const dataArray = Object.values(data);

  const renderItem = ({ item }) => (
    <Card style={styles.card}>
      <Card.Title
        title={item.name}
        subtitle={`Class Number: ${item.class_number}`}
        titleStyle={styles.hazratName}
      />
      <Card.Content>
        <PaperText variant="bodyMedium">
          Number of Students: {item.number_of_students}
        </PaperText>
      </Card.Content>
      <Card.Actions>
        <Button
          mode="contained"
          style={styles.viewButton}
          onPress={() => router.navigate("/student")}
        >
          <Text style={styles.buttonText}>View</Text>
        </Button>
        <Button mode="outlined" style={styles.moreButton}>
          <Text style={styles.buttonMoreText}>More</Text>
        </Button>
      </Card.Actions>
    </Card>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Hifz Tracker</Text>
      </View>
      <View
        style={{
          height: 40,
          width: "100%",
          backgroundColor: "transparent",
          justifyContent: "flex-end",
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 20,
        }}
      >
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => router.navigate("/addHazrat")}
        >
          <Text style={styles.addButtonText}>Add Hazrat</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={dataArray}
        renderItem={renderItem}
        keyExtractor={(item) => `hazrat${item.id}`}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
};

export default MainIndex;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "grey",
    flex: 1,
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
  title: {
    color: "white",
    fontWeight: "900",
    fontSize: 30,
  },
  list: {
    padding: 10,
  },
  card: {
    marginBottom: 10,
  },
  hazratName: {
    fontWeight: "bold", // Make the hazrat name bold
    fontSize: 18, // Increase the font size for better visibility
    color: "green", // Change color to white for better contrast
    textTransform: "capitalize",
  },
  viewButton: {
    borderColor: "lightgreen", // Border color for the View button
    backgroundColor: "green", // Background color for the View button
    marginRight: 10, // Space between buttons
  },
  moreButton: {
    borderColor: "lightgreen", // Border color for the More button
    backgroundColor: "transparent", // Transparent background for outlined style
  },
  buttonText: {
    color: "white", // Text color for both buttons
  },
  buttonMoreText: {
    color: "green",
  },
  addButton: {
    backgroundColor: '#A8E6CF', // Light green background
    borderRadius: 10,
    borderColor: '#81C784', // Slightly darker green for the border
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#2E7D32', // Dark green text for better contrast
  },
});
