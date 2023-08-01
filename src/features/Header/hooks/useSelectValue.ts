import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const useSelectValue = (queryName: string) => {
  const [search, setSearch] = useSearchParams();
  const [value, setValue] = useState(search.get(queryName) || '');

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
  }, [value]);

  return [value, setValue] as const;
};
