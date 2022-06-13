/*
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 This is a starter component and can be deleted.
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 Delete this file and get started with your project!
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 */
import { DataContext } from '@mf-react-state/shared/data-context';
import { useContext } from 'react';
export function NxWelcome({ title }: { title: string }) {
  const { counter, setCounter } = useContext(DataContext);
  return (
    <>
      Shell{' '}
      <button onClick={() => setCounter(counter + 1)}>counter {counter}</button>{' '}
    </>
  );
}

export default NxWelcome;
