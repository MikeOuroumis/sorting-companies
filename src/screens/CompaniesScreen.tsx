import React, {useState} from 'react';
import {View} from 'react-native';
import CompaniesList from '../components/CompaniesList';
import SearchBar from '../components/SearchBar';
import useFetchCompanies from '../hooks/useFetchCompanies';
import {Company} from '../domain/company';
import useSearchCompany from '../hooks/useSearchCompany';

export default function CompaniesScreen() {
  const [query, setQuery] = useState<string>('');
  const companies: Company[] = useFetchCompanies();
  const filteredCompanies = useSearchCompany(companies, query);

  return (
    <View>
      <SearchBar setQuery={setQuery} />
      <CompaniesList companies={filteredCompanies} />
    </View>
  );
}
