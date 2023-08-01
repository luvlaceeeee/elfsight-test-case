import { X } from 'lucide-react';
import { Input } from '@/shared/ui/Input.tsx';
import { useSearchValue } from '@/features/Header/hooks/useSearchValue.ts';
import { Button } from '@/shared/ui/Button.tsx';

export function SearchSpeciesInput() {
  const [species, setSpecies] = useSearchValue('species');

  return (
    <div>
      <span className="text-sm font-semibold text-zinc-500">
        Search by species:
      </span>

      <div className="flex items-center gap-2">
        <Input
          placeholder="Write species"
          value={species}
          onChange={(e) => setSpecies(e.target.value)}
          className="md:w-fit"
        />
        <Button
          variant="destructive"
          size="icon"
          onClick={() => setSpecies('')}
          disabled={!species}
        >
          <X className="h-5 w-5 text-white" />
        </Button>
      </div>
    </div>
  );
}
