import { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import { useDisableScroll } from '@/shared/hooks';

interface BackdropProps {
  children: ReactNode;
  closeModal: () => void;
}
export function Backdrop({ children, closeModal }: BackdropProps) {
  useDisableScroll();

  return createPortal(
    <div
      className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-zinc-600/80 p-5 backdrop-blur animate-in fade-in-20"
      onClick={closeModal}
    >
      <X className="absolute right-2 top-2 h-10 w-10 text-zinc-300/50 hover:text-zinc-300 md:right-10 md:top-10" />
      {children}
    </div>,
    document.getElementById('portal') as Element
  );
}
