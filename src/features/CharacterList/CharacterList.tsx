import { Link } from 'react-router-dom';
import { useCharacters } from '@/features/CharacterList/hooks/useCharacters.ts';
import { IGetAllCharacterResponse } from '@/features/CharacterList/types/IGetAllCharacterResponse.ts';
import { CharacterCard } from '@/features/CharacterCard';
import { Pagination } from '@/features/Pagination/Pagination.tsx';
import { usePagination } from '@/features/CharacterList/hooks/usePagination.ts';
import { Button } from '@/shared/ui';

export function CharacterList() {
  // const navigate = useNavigate();

  const page = usePagination();

  const {
    data: characters = {} as IGetAllCharacterResponse,
    isLoading,
    isError,
  } = useCharacters(page, { keepPreviousData: true });

  if (isLoading) {
    return (
      <div className="grid grid-cols-2 gap-5 md:grid-cols-3">
        {[...new Array(10)].map((_, i) => (
          <div
            key={i}
            className="h-40 min-w-full animate-pulse rounded-xl bg-zinc-400"
          />
        ))}
      </div>
    );
  }

  // if (error.code !== 404 || !characters.results.length) {
  //   navigate('/error');
  // }

  return !isError ? (
    <>
      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3">
        {characters.results.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
      <Pagination
        page={page}
        next={!characters.info.next}
        prev={!characters.info.prev}
      />
    </>
  ) : (
    <div className="flex flex-col items-center gap-2">
      <p className=" font-semibold">Not found</p>
      <Link to="/">
        <Button className="w-fit">Go back</Button>
      </Link>
    </div>
  );
}
