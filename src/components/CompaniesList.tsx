import React from 'react';
import {FlatList} from 'react-native';
import CompanyItem from './CompanyItem';
import {Company} from '../domain/company';

interface Props {
  companies: Company[];
}

export default function CompaniesList({companies}: Props) {
  return (
    <FlatList
      data={companies}
      renderItem={({item}) => <CompanyItem company={item} />}
      keyExtractor={item => item.id.toString()}
    />
  );
}
