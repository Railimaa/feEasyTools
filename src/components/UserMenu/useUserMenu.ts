import { UseAuth } from '../../contexts/useAuth';

export function useUserMenu() {
  const { user, signOut } = UseAuth();

  return {
    user,
    signOut,
  };
}
