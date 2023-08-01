import { useState } from 'react';
import { ICharacter } from '@/shared/types';
import { CardStatus } from '@/features/CharacterCard/components/CardStatus.tsx';
import { Button } from '@/shared/ui/Button.tsx';
import { CharacterModal } from '@/features/Modal';

interface CharacterCardProps {
  character: ICharacter;
}

export function CharacterCard({ character }: CharacterCardProps): JSX.Element {
  const { name, image, status, gender } = character;

  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="flex h-full cursor-pointer flex-col rounded-xl bg-zinc-100 shadow-md hover:bg-gray-200/80 md:flex-row"
        onClick={() => setOpen(true)}
      >
        <div className="flex h-[165px] w-full shrink-0 items-center md:h-[178px] md:w-[178px]">
          {image ? (
            // eslint-disable-next-line jsx-a11y/img-redundant-alt
            <img
              src={image}
              alt={`${name} image`}
              className="img h-full w-full rounded-t-xl md:rounded-l-xl md:rounded-r-none"
            />
          ) : (
            <p className="w-full text-center font-semibold">No image :(</p>
          )}
        </div>

        <section className="flex h-full w-full flex-col justify-between gap-5 p-3 py-2 md:p-4 md:py-3">
          <div className="flex flex-col">
            <h1 className="text-lg font-bold hover:text-orange-400 md:text-xl md:font-black">
              {name}
            </h1>
            <CardStatus status={status} gender={gender} />
          </div>

          <div className="flex justify-center md:justify-end">
            <Button
              variant="outline"
              className="h-6 text-xs md:h-7 md:px-2 md:text-sm"
            >
              Watch more
            </Button>
          </div>
        </section>
      </div>

      {open && (
        <CharacterModal
          closeModal={() => setOpen(false)}
          character={character}
        />
      )}
    </>
  );
}
