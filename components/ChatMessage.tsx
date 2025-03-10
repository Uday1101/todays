import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Theme } from './Theme';

export default function ChatMessage({ message, isDarkMode }) {
  const isUser = message.sender === 'user';

  return (
    <View
      style={[
        styles.container,
        isUser ? styles.userContainer : styles.aiContainer,
        isDarkMode && styles.darkContainer,
      ]}
    >
      <Text
        style={[
          styles.text,
          isUser ? styles.userText : styles.aiText,
          isDarkMode && styles.darkText,
        ]}
      >
        {message.text}
      </Text>
      <Text
        style={[
          styles.timestamp,
          isUser ? styles.userTimestamp : styles.aiTimestamp,
          isDarkMode && styles.darkTimestamp,
        ]}
      >
        {new Date(message.timestamp).toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        })}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    maxWidth: '80%',
    borderRadius: 16,
    padding: 12,
    marginVertical: 4,
  },
  userContainer: {
    alignSelf: 'flex-end',
    backgroundColor: Theme.colors.primary,
  },
  aiContainer: {
    alignSelf: 'flex-start',
    backgroundColor: '#E9E9EB',
  },
  darkContainer: {
    backgroundColor: '#333',
  },
  text: {
    fontSize: 16,
    lineHeight: 22,
  },
  userText: {
    color: '#fff',
  },
  aiText: {
    color: '#000',
  },
  darkText: {
    color: '#fff',
  },
  timestamp: {
    fontSize: 12,
    marginTop: 4,
  },
  userTimestamp: {
    color: 'rgba(255, 255, 255, 0.7)',
  },
  aiTimestamp: {
    color: 'rgba(0, 0, 0, 0.5)',
  },
  darkTimestamp: {
    color: 'rgba(255, 255, 255, 0.5)',
  },
});