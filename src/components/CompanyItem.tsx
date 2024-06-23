import React from 'react';
import {Text, View} from 'react-native';
import {Company} from '../domain/company';

interface Props {
  company: Company;
}
export default function CompanyItem({company}: Props) {
  return (
    <View>
      <Text>{company.name}</Text>
    </View>
  );
}
