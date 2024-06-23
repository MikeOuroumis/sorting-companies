import {useCallback, useEffect, useState} from 'react';
import {fetchFakeCompanies} from '../services/api';
import {mergeSort} from '../lib/sotring';
import {Company} from '../domain/company';

export default function useFetchCompanies() {
  const [companies, setCompanies] = useState<Company[]>([]);

  const fetchAndSortCompanies = useCallback(async () => {
    if (companies.length > 0) {
      return;
    }

    const fakeCompanies = await fetchFakeCompanies();
    const sortedCompanies = mergeSort(fakeCompanies);
    setCompanies(sortedCompanies);
  }, [companies.length]);

  useEffect(() => {
    fetchAndSortCompanies();
  }, [fetchAndSortCompanies]);

  return companies;
}
