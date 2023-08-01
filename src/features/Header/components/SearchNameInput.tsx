import { X } from 'lucide-react';
import { Input } from '@/shared/ui/Input.tsx';
import { useSearchValue } from '@/features/Header/hooks/useSearchValue.ts';
import { Button } from '@/shared/ui/Button.tsx';

export function SearchNameInput() {
  const [name, setName] = useSearchValue('name');

  return (
    <div>
      <span className="text-sm font-semibold text-zinc-500">
        Search by name:
      </span>
      <div className="flex items-center gap-2">
        <Input
          placeholder="Write name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="md:w-fit"
        />
        <Button
          variant="destructive"
          size="icon"
          onClick={() => setName('')}
          disabled={!name}
        >
          <X className="h-5 w-5 text-white" />
        </Button>
      </div>
    </div>
  );
}
