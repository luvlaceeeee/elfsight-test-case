import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export const useSearchQueries = () => {
  const [name, setName] = useState<string | null>(null);
  const [species, setSpecies] = useState<string | null>(null);
  const [type, setType] = useState<string | null>(null);
  const [gender, setGender] = useState<string | null>(null);
  const [status, setStatus] = useState<string | null>(null);

  const [searchParams] = useSearchParams();

  useEffect(() => {
    const searchName = searchParams.get('name');
    const searchSpecies = searchParams.get('species');
    const searchType = searchParams.get('type');
    const searchGender = searchParams.get('gender');
    const searchStatus = searchParams.get('status');

    if (searchName) {
      setName(searchName);
    } else setName(null);

    if (searchSpecies) {
      setSpecies(searchSpecies);
    } else setSpecies(null);

    if (searchType) {
      setType(searchType);
    } else setType(null);

    if (searchGender) {
      setGender(searchGender);
    } else setGender(null);

    if (searchStatus) {
      setStatus(searchStatus);
    } else setStatus(null);
  }, [searchParams]);

  return { gender, name, status, species, type };
};
