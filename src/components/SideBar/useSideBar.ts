import { useEffect, useState } from 'react';

import { useTheme } from '../../contexts/useTheme';

export function useSideBar(open: boolean, handleCloseSideBar: () => void) {
  const [shoulderRender, setShoulderRender] = useState<boolean>(open);
  const { theme } = useTheme();

  function handleScrollY(type: 'hidden' | 'auto') {
    document.body.style.overflowY = `${type}`;
  }

  useEffect(() => {
    if (open) {
      setShoulderRender(true);
      handleScrollY('hidden');
    }

    let timeoutId: NodeJS.Timeout;
    if (!open) {
      timeoutId = setTimeout(() => {
        setShoulderRender(false);
        handleScrollY('auto');
      }, 300);
    }

    return () => clearTimeout(timeoutId);
  }, [open]);

  useEffect(() => {
    function handleKeydown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        handleCloseSideBar();
      }
    }

    document.addEventListener('keydown', handleKeydown);

    return () => {
      document.removeEventListener('keydown', handleKeydown);
    };
  }, [handleCloseSideBar]);

  return {
    shoulderRender,
    theme,
  };
}
