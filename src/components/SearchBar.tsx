import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

interface Props {
  setQuery: (query: string) => void;
}

export default function SearchBar({setQuery}: Props) {
  return (
    <TextInput
      style={styles.container}
      onChangeText={input => setQuery(input)}
      placeholder="Type here to search for a company..."
    />
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: '#000',
    borderWidth: 2,
    marginBottom: 5,
  },
});
