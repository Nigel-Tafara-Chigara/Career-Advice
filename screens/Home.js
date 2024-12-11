import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Account Type</Text>

      {/* Button for User */}
      <View style={styles.buttonContainer}>
        <Button
          title="User"
          onPress={() => navigation.navigate('Signup', { userType: 'User' })}
        />
      </View>
      
      {/* Button for Admin */}
      <View style={styles.buttonContainer}>
        <Button
          title="Admin"
          onPress={() => navigation.navigate('Signup', { userType: 'Admin' })}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  buttonContainer: {
    marginBottom: 15, // Space between buttons
    width: '100%', // Make sure buttons take full width
  },
});

export default Home;
