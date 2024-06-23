import {useEffect, useState} from 'react';
import {Company} from '../domain/company';
import {searchCompanies} from '../lib/searching';

export default function useSearchCompany(companies: Company[], query: string) {
  const [filteredCompanies, setFilteredCompanies] = useState<Company[]>([]);

  useEffect(() => {
    setFilteredCompanies(searchCompanies(companies, query));
  }, [query, companies]);

  return filteredCompanies;
}
