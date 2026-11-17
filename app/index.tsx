
import { Link } from 'expo-router';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  const [likes, setLikes] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello, World!</Text>
      <Text style={styles.name}>Arina Bakyt</Text>

      <Pressable
        style={styles.button}
        onPress={() => setLikes(likes + 1)}
      >
        <Text style={styles.buttonText}>Like</Text>
      </Pressable>

      <Text style={styles.likes}>Likes: {likes}</Text>

      <Link href="/events" asChild>
        <Pressable style={styles.eventsButton}>
          <Text style={styles.buttonText}>Events</Text>
        </Pressable>
      </Link>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  name: {
    fontSize: 20,
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#2563eb',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    marginBottom: 16,
  },
  eventsButton: {
    backgroundColor: '#16a34a',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  likes: {
    fontSize: 20,
  },
});
