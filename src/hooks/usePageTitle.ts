import { useEffect } from 'react';

const BASE_TITLE = 'Skjønnhet Skincare';

export function usePageTitle(title?: string) {
  useEffect(() => {
    document.title = title ? `${title} — ${BASE_TITLE}` : BASE_TITLE;
  }, [title]);
}
