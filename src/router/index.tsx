import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Spinner } from '../components/Spinner';

import { AuthGuard } from './AuthGuard';

const Signin = lazy(() => import('../pages/Signin'));
const Signup = lazy(() => import('../pages/Signup'));
const YourFinances = lazy(() => import('../pages/YourFinances'));
const Contacts = lazy(() => import('../pages/Contacts'));
const Task = lazy(() => import('../pages/Task'));
const Profile = lazy(() => import('../pages/Profile'));
const LayouthAuth = lazy(() => import('../components/LayoutAuth'));

export function Router() {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100vw',
              height: '100vh',
            }}
          >
            <Spinner width="40" height="40" />
          </div>
        }
      >
        <Routes>
          <Route>
            <Route element={<AuthGuard isPrivate={false} />}>
              <Route element={<LayouthAuth />}>
                <Route path="/login" element={<Signin />} />
                <Route path="/register" element={<Signup />} />
              </Route>
            </Route>

            <Route element={<AuthGuard isPrivate />}>
              <Route path="/" element={<YourFinances />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/task" element={<Task />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="*" element={<h1>Pagina nao encontrada</h1>} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
