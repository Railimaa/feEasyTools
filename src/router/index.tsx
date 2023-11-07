import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { LayouthAuth } from '../components/LayoutAuth';
import { Contacts } from '../pages/Contacts';
import { Signin } from '../pages/Signin';
import { Signup } from '../pages/Signup';
import { Task } from '../pages/Task';
import { YourFinances } from '../pages/YourFinances';

import { AuthGuard } from './AuthGuard';

export function Router() {
  return (
    <BrowserRouter>
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
            <Route path="*" element={<h1>Pagina nao encontrada</h1>} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
