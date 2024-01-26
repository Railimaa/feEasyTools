import { useEffect, useState } from 'react';

import { useTheme } from '../../contexts/useTheme';

export function useModal(open: boolean) {
  const { theme } = useTheme();
  const [shoulderRender, setShoulderRender] = useState<boolean>(open);

  useEffect(() => {
    if (open) {
      setShoulderRender(true);
    }

    let timeoutId: NodeJS.Timeout;
    if (!open && shoulderRender) {
      timeoutId = setTimeout(() => {
        setShoulderRender(false);
      }, 300);
    }

    return () => clearTimeout(timeoutId);
  }, [open, shoulderRender]);

  return {
    theme,
    shoulderRender,
  };
}
