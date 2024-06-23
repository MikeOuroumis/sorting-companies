import {useCallback, useEffect, useState} from 'react';
import {fetchFakeCompanies} from '../services/api';
import {mergeSort} from '../lib/sotring';
import {Company} from '../domain/company';

export default function useFetchCompanies() {
  const [companies, setCompanies] = useState<Company[]>([]);

  const fetchAndSortCompanies = useCallback(async () => {
    const fakeCompanies = await fetchFakeCompanies();
    const sortedCompanies = mergeSort(fakeCompanies);
    setCompanies(sortedCompanies);
  }, []);

  useEffect(() => {
    fetchAndSortCompanies();
  }, [fetchAndSortCompanies]);

  return companies;
}
