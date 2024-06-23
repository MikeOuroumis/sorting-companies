import {useEffect, useState} from 'react';
import {Company} from '../domain/company';
import {searchCompanies} from '../lib/searching';

export default function useSearchCompany(companies: Company[], query: string) {
  const [filteredCompanies, setFilteredCompanies] = useState<Company[]>([]);
  const [executionTime, setExecutionTime] = useState<number>(0);

  useEffect(() => {
    const startTime = performance.now();
    const result = searchCompanies(companies, query);
    const endTime = performance.now();

    setFilteredCompanies(result);
    setExecutionTime(endTime - startTime);
  }, [query, companies]);

  return {filteredCompanies, executionTime};
}
