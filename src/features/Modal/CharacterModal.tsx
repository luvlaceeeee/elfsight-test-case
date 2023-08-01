import { Backdrop } from '@/features/Modal/components/Backdrop.tsx';
import { ICharacter } from '@/shared/types';
import { CardStatus } from '@/features/CharacterCard';
import { ModalSection } from '@/features/Modal/components/ModalSection.tsx';

interface ModalProps {
  character: ICharacter;
  closeModal: () => void;
}
export function CharacterModal({ closeModal, character }: ModalProps) {
  const { name, gender, image, status, type, species, url, location, origin } =
    character;
  return (
    <Backdrop closeModal={closeModal}>
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex w-[300px] flex-col rounded-xl bg-zinc-200 shadow-2xl md:w-full md:max-w-3xl md:flex-row"
      >
        <div className="flex items-center md:h-[300px] md:w-[300px] md:shrink-0">
          {image ? (
            <img
              src={image}
              alt="imag"
              className="img h-full w-full rounded-t-xl md:rounded-l-xl md:rounded-r-none"
            />
          ) : (
            <p className="w-full text-center font-semibold">No image :(</p>
          )}
        </div>

        <section className="flex h-full flex-col justify-between gap-2 p-3 py-2 md:gap-3 md:p-4 md:py-3">
          <div className="flex flex-col gap-1 border-b border-zinc-400 pb-2 md:border-b-0">
            <a
              href={url}
              target="_blank"
              className="text-xl font-bold hover:text-orange-400 md:text-2xl md:font-black"
            >
              {name}
            </a>
            <CardStatus status={status} gender={gender} />
          </div>

          <div className="flex gap-7">
            <ModalSection label="Species:" content={species} />
            <ModalSection label="Type:" content={type || 'unknown'} />
          </div>

          <ModalSection
            label="Location:"
            content={location.name}
            href={location.url}
          />

          <ModalSection
            label="Origin:"
            content={origin.name}
            href={origin.url}
          />
        </section>
      </div>
    </Backdrop>
  );
}
