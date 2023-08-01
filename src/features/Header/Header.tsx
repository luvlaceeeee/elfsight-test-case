import { useSearchParams } from 'react-router-dom';
import { SearchNameInput } from '@/features/Header/components/SearchNameInput.tsx';
import { GenderSelect } from '@/features/Header/components/GenderSelect.tsx';
import { StatusSelect } from '@/features/Header/components/StatusSelect.tsx';
import { SearchTypeInput } from '@/features/Header/components/SearchTypeInput.tsx';
import { SearchSpeciesInput } from '@/features/Header/components/SearchSpeciesInput.tsx';
import { Button } from '@/shared/ui';

export function Header() {
  // eslint-disable-next-line @typescript-eslint/naming-convention,@typescript-eslint/no-unused-vars
  const [_, setSearch] = useSearchParams();

  const handleClearFilter = () => {
    setSearch();
  };

  return (
    <div className="flex flex-col gap-2 rounded-xl bg-zinc-100 px-5 py-3 shadow lg:gap-5">
      <div className="md:flex md:gap-5">
        <SearchNameInput />
        <SearchTypeInput />
        <SearchSpeciesInput />
      </div>
      <div className="md:flex md:gap-5">
        <GenderSelect />
        <StatusSelect />
      </div>
      <Button
        variant="destructive"
        onClick={handleClearFilter}
        className="text-white"
      >
        Clear filters
      </Button>
    </div>
  );
}
