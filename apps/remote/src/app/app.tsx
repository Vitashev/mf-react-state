// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import NxWelcome from './nx-welcome';
import { DataContext } from '@mf-react-state/shared/data-context';
import { useContext } from 'react';
export function App() {
  const { counter, setCounter } = useContext(DataContext);
  return (
    <>
      Remote{' '}
      <button onClick={() => setCounter(counter - 1)}>counter {counter}</button>{' '}
    </>
  );
}

export default App;
