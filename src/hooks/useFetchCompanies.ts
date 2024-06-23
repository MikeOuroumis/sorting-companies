import {useCallback, useEffect, useState} from 'react';
import {fetchFakeCompanies} from '../services/api';

export default function useFetchCompanies() {
  const [companies, setCompanies] = useState([]);

  const fetchCompanies = useCallback(async () => {
    const fakeCompanies = await fetchFakeCompanies();
    setCompanies(fakeCompanies);
  }, []);

  useEffect(() => {
    fetchCompanies();
  }, [fetchCompanies]);

  return companies;
}
