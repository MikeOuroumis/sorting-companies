import React, {useState} from 'react';
import {StyleSheet, TextInput} from 'react-native';
import useSearchCompany from '../hooks/useSearchCompany';

export default function SearchBar() {
  const [query, setQuery] = useState<string>('');
  useSearchCompany(query);

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
