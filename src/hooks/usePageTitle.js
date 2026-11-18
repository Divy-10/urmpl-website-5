import { useEffect } from 'react';

export default function usePageTitle(title) {
  useEffect(() => {
    document.title = title
      ? `${title} | URMPL — United Raw Material Pte. Ltd.`
      : 'URMPL — United Raw Material Pte. Ltd.';
  }, [title]);
}
