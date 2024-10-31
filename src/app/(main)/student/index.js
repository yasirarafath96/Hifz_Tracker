import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Card, Button, Text as PaperText } from 'react-native-paper';
import { router } from 'expo-router';

const StudentIndex = () => {
  const studentData = [
    { id: 1, name: 'Ali', age: 15, currentPara: 'Para 1' },
    { id: 2, name: 'Fatima', age: 14, currentPara: 'Para 2' },
    { id: 3, name: 'Ahmed', age: 16, currentPara: 'Para 3' },
    { id: 4, name: 'Zainab', age: 15, currentPara: 'Para 4' },
    { id: 5, name: 'Omar', age: 13, currentPara: 'Para 5' },
  ];

  const renderStudentItem = ({ item }) => (
    <Card style={styles.card}>
      <Card.Title 
        title={item.name} 
        subtitle={`Age: ${item.age} | Current Para: ${item.currentPara}`} 
        titleStyle={styles.studentName} 
      />
      <Card.Actions>
        <Button
          mode="contained"
          style={styles.viewButton}
          onPress={() => router.push(`/student`)}
        >
          View
        </Button>
        <Button
          mode="outlined"
          style={styles.moreButton}
        >
          More
        </Button>
      </Card.Actions>
    </Card>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={studentData}
        renderItem={renderStudentItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default StudentIndex;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    padding: 10,
  },
  card: {
    marginBottom: 10,
  },
  studentName: {
    fontWeight: 'bold', // Make the student name bold
    fontSize: 18, // Increase the font size for better visibility
    color: 'green', // Change color to green for better contrast
    textTransform: 'capitalize', // Capitalize the first letter of each word
  },
  viewButton: {
    marginRight: 10,
    backgroundColor: 'green', // Adjust the button color to match your theme
  },
  moreButton: {
    borderColor: 'lightgreen', // For outlined button style
  },
});
