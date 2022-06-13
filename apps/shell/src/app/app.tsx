import * as React from 'react';
import NxWelcome from './nx-welcome';
import { Link, Route, Routes } from 'react-router-dom';
import { DataProvider } from '@mf-react-state/shared/data-context';

const Remote = React.lazy(() => import('remote/Module'));

export function App() {
  return (
    <DataProvider>
      <React.Suspense fallback={null}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/remote">Remote</Link>
          </li>
        </ul>

        <Routes>
          <Route path="/" element={<NxWelcome title="shell" />} />
          <Route path="/remote" element={<Remote />} />
        </Routes>
      </React.Suspense>
    </DataProvider>
  );
}

export default App;
