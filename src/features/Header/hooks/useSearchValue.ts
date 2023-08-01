import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDebounce } from '@/shared/hooks';

export const useSearchValue = (queryName: string) => {
  const [search, setSearch] = useSearchParams();
  const [value, setValue] = useState(search.get(queryName) || '');
  const debouncedSearchTerm = useDebounce(value, 300);

  useEffect(() => {
    if (!search.get(queryName)) setValue('');
  }, [search]);

  useEffect(() => {
    if (value) {
      search.set(queryName, value);
      search.delete('page');
      setSearch(search);
    } else {
      search.delete(queryName);
      setSearch(search);
    }
  }, [debouncedSearchTerm]);

  return [value, setValue] as const;
};
