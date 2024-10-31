import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

const AddHazrat = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [numberOfStudents, setNumberOfStudents] = useState('');
  const [classRoom, setClassRoom] = useState('');

  const handleSubmit = () => {
    if (!firstName || !lastName || !numberOfStudents || !classRoom) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }


    const hazratData = {
      firstName,
      lastName,
      numberOfStudents: parseInt(numberOfStudents, 10),
      classRoom,
    };

    console.log('Submitted Hazrat Data:', hazratData);

    // Reset form
    setFirstName('');
    setLastName('');
    setNumberOfStudents('');
    setClassRoom('');
    Alert.alert('Success', 'Hazrat details added successfully!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Hazrat</Text>

      <Text style={styles.label}>First Name</Text>
      <TextInput
        style={styles.input}
        value={firstName}
        onChangeText={setFirstName}
      />

      <Text style={styles.label}>Last Name</Text>
      <TextInput
        style={styles.input}
        value={lastName}
        onChangeText={setLastName}
      />

      <Text style={styles.label}>Number of Students</Text>
      <TextInput
        style={styles.input}
        value={numberOfStudents}
        keyboardType="numeric"
        onChangeText={setNumberOfStudents}
      />

      <Text style={styles.label}>Classroom</Text>
      <TextInput
        style={styles.input}
        value={classRoom}
        onChangeText={setClassRoom}
      />

      <Button title="Add Hazrat" onPress={handleSubmit} />
    </View>
  );
};

export default AddHazrat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: '600',
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
});
