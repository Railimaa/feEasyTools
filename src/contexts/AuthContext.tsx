import { useQuery } from '@tanstack/react-query';
import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import toast from 'react-hot-toast';

import { PageLoader } from '../components/PageLoader';
import { usersService } from '../services/usersService';
import { IUser } from '../types/User';

interface IAuthContextValue {
  signedIn: boolean;
  signin: (accessToken: string) => void;
  signOut: () => void;
  user: IUser | undefined;
}

export const AuthContext = createContext({} as IAuthContextValue);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [signedIn, setsignedIn] = useState<boolean>(() => {
    const storageAccessToken = localStorage.getItem('accessToken');

    return !!storageAccessToken;
  });

  const { isError, isFetching, isSuccess, remove, data } = useQuery({
    queryKey: ['users', 'me'],
    queryFn: () => usersService.me(),
    enabled: signedIn,
    staleTime: Infinity,
  });

  const signin = useCallback((accessToken: string) => {
    localStorage.setItem('accessToken', accessToken);
    setsignedIn(true);
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('accessToken');
    remove();

    setsignedIn(false);
  }, [remove]);

  useEffect(() => {
    if (isError) {
      toast.error('Sua sessão expirou!');
      signOut();
    }
  }, [isError, signOut]);

  const authContextValue = useMemo(
    () => ({
      signedIn: isSuccess && signedIn,
      signin,
      signOut,
      user: data,
    }),
    [isSuccess, signedIn, signin, signOut, data],
  );

  return (
    <AuthContext.Provider value={authContextValue}>
      {isFetching && <PageLoader isFetching={isFetching} />}

      {!isFetching && children}
    </AuthContext.Provider>
  );
}
