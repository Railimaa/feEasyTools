import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';

import Global from '../../assets/styles/global';
import { AuthProvider } from '../../contexts/AuthContext';
import { Router } from '../../router';

const queryCliente = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

export function App() {
  return (
    <QueryClientProvider client={queryCliente}>
      <AuthProvider>
        <Global />

        <Router />
        <Toaster />
      </AuthProvider>
    </QueryClientProvider>
  );
}
