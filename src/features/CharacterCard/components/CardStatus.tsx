import { ICharacter } from '@/shared/types';

type CardStatusProps = Pick<ICharacter, 'status' | 'gender'>;

export function CardStatus({ gender, status }: CardStatusProps) {
  return (
    <div className="flex items-center gap-2">
      <CardStatus.Circle status={status} />
      <p className="text-xs md:text-sm">
        {status} - {gender}
      </p>
    </div>
  );
}

CardStatus.Circle = function StatusCircle({ status }: { status: string }) {
  if (status === 'Alive')
    return <div className="h-2 w-2 rounded-full bg-green-500" />;

  if (status === 'Dead')
    return <div className="h-2 w-2 rounded-full bg-red-500" />;

  return <div className="h-2 w-2 rounded-full bg-gray-500" />;
};
