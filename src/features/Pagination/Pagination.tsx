import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import { Button } from '@/shared/ui/Button.tsx';

interface PaginationProps {
  page: number;
  next: boolean;
  prev: boolean;
}

export function Pagination({ next, page, prev }: PaginationProps) {
  const [searchParams, setSearchParams] = useSearchParams();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0 });
  };

  const handleNextPage = () => {
    searchParams.set('page', `${page + 1}`);
    setSearchParams(searchParams, { replace: true });
    scrollToTop();
  };

  const handlePrevPage = () => {
    searchParams.set('page', `${page - 1}`);
    setSearchParams(searchParams, { replace: true });
    scrollToTop();
  };

  return (
    <div className="flex items-center justify-center gap-5">
      <Button onClick={handlePrevPage} size="icon" disabled={prev}>
        <ChevronLeft className="h-5 w-5 text-white" />
      </Button>
      <span className="font-semibold">{page}</span>
      <Button onClick={handleNextPage} disabled={next} size="icon">
        <ChevronRight className="h-5 w-5 text-white" />
      </Button>
    </div>
  );
}
