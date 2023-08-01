import { X } from 'lucide-react';
import { Select } from '@/shared/ui/Select.tsx';
import { statuses } from '@/features/Header/config/statuses.ts';
import { Button } from '@/shared/ui/Button.tsx';
import { useSelectValue } from '@/features/Header/hooks/useSelectValue.ts';

export function StatusSelect() {
  const [status, setStatus] = useSelectValue('status');
  return (
    <div>
      <span className="text-sm font-semibold text-zinc-500">Status:</span>
      <div className="flex items-center gap-2">
        <Select
          placeholder="Choose status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          {statuses.map((e, i) => (
            <option key={i} value={e.value}>
              {e.name}
            </option>
          ))}
        </Select>
        <Button
          variant="destructive"
          size="icon"
          onClick={() => setStatus('')}
          disabled={!status}
        >
          <X className="h-5 w-5 text-white" />
        </Button>
      </div>
    </div>
  );
}
