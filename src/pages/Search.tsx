import { CharacterList } from '@/features/CharacterList/CharacterList.tsx';
import { Header } from '@/features/Header';

export function Search() {
  return (
    <div className="flex flex-col gap-5">
      <Header />
      <CharacterList />
    </div>
  );
}
