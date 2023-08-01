import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { $api } from '@/shared/config';
import { IGetAllCharacterResponse } from '@/features/CharacterList/types/IGetAllCharacterResponse.ts';
import { useSearchQueries } from '@/features/CharacterList/hooks/useSearchQueries.ts';

export const useCharacters = (
  page: number,
  options?: UseQueryOptions<IGetAllCharacterResponse, AxiosError>
) => {
  const { gender, name, status, species, type } = useSearchQueries();

  return useQuery<IGetAllCharacterResponse, AxiosError>(
    ['all-character', page, name, gender, status, species, type],
    () =>
      $api
        .get<IGetAllCharacterResponse>(
          'https://rickandmortyapi.com/api/character',
          { params: { page, name, gender, status, species, type } }
        )
        .then((res) => res.data),
    { ...options }
  );
};
