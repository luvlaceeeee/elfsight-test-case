import { X } from 'lucide-react';
import { Input } from '@/shared/ui/Input.tsx';
import { useSearchValue } from '@/features/Header/hooks/useSearchValue.ts';
import { Button } from '@/shared/ui/Button.tsx';

export function SearchTypeInput() {
  const [type, setType] = useSearchValue('type');
  return (
    <div>
      <span className="text-sm font-semibold text-zinc-500">
        Search by type:
      </span>
      <div className="flex items-center gap-2">
        <Input
          placeholder="Write type"
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="md:w-fit"
        />
        <Button
          variant="destructive"
          size="icon"
          onClick={() => setType('')}
          disabled={!type}
        >
          <X className="h-5 w-5 text-white" />
        </Button>
      </div>
    </div>
  );
}
