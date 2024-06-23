import React from 'react';
import {FlatList} from 'react-native';
import useFetchCompanies from '../hooks/useFetchCompanies';
import CompanyItem from './CompanyItem';
import {Company} from '../domain/company';

export default function CompaniesList() {
  const companies: Company[] = useFetchCompanies();

  return (
    <FlatList
      data={companies}
      renderItem={({item}) => <CompanyItem company={item} />}
      keyExtractor={item => item.id}
    />
  );
}
