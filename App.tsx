import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome!</Text>
      <Text style={styles.text}>This is a simple app</Text>
      <Text style={styles.text}>That can receive notifications from Firebase</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f4f8', // Light background
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textTransform: 'uppercase',
    letterSpacing: 1.5,
  },
  text: {
    fontSize: 18,
    color: '#555',
    textAlign: 'center',
    marginVertical: 5,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3, // Android shadow effect
  },
});

export default App;
