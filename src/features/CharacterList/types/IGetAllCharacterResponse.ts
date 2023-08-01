import { ICharacter } from '@/shared/types/ICharacter.ts';

export interface IGetAllCharacterResponse {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string | null;
  };
  results: ICharacter[];
}
