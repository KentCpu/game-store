import { useCallback, useMemo, useState } from 'react';

type useToggleResult = [boolean, () => void];

export const useTogglePassword = (initialValue = false): useToggleResult => {
  const [isVisiblePassword, setIsVisiblePassword] = useState<boolean>(initialValue);

  const togglePassword = useCallback(() => {
    setIsVisiblePassword((prevVisible) => !prevVisible);
  }, [setIsVisiblePassword]);

  return useMemo(() => [isVisiblePassword, togglePassword], [isVisiblePassword]);
};
