import { X } from 'lucide-react';
import { Select } from '@/shared/ui/Select.tsx';
import { genders } from '@/features/Header/config/genders.ts';
import { Button } from '@/shared/ui/Button.tsx';
import { useSelectValue } from '@/features/Header/hooks/useSelectValue.ts';

export function GenderSelect() {
  const [gender, setGender] = useSelectValue('gender');

  return (
    <div>
      <span className="text-sm font-semibold text-zinc-500">Gender:</span>
      <div className="flex items-center gap-2">
        <Select
          placeholder="Choose gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          {genders.map((e, i) => (
            <option key={i} value={e.value} className="rounded-2xl">
              {e.name}
            </option>
          ))}
        </Select>
        <Button
          variant="destructive"
          size="icon"
          onClick={() => setGender('')}
          disabled={!gender}
        >
          <X className="h-5 w-5 text-white" />
        </Button>{' '}
      </div>
    </div>
  );
}
