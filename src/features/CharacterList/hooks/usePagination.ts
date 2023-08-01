import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export const usePagination = () => {
  const [page, setPage] = useState(1);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const currentPage = searchParams.get('page');

    if (currentPage) {
      if (currentPage === '0') {
        setPage(+currentPage + 1);
        return;
      }

      setPage(+currentPage);
    } else setPage(1);
  }, [searchParams, page]);

  return page;
};
