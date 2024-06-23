import React from 'react';
import {View} from 'react-native';
import CompaniesList from '../components/CompaniesList';
import SearchBar from '../components/SearchBar';

export default function CompaniesScreen() {
  return (
    <View>
      <SearchBar />
      <CompaniesList />
    </View>
  );
}
