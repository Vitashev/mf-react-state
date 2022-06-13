import { createContext, useState } from 'react';

/* eslint-disable-next-line */
export interface SharedDataContextProps {
  children: JSX.Element;
}

export const DataContext = createContext<Record<string, any>>({});

export function DataProvider({ children }: SharedDataContextProps) {
  const [counter, setCounter] = useState(1);

  return (
    <DataContext.Provider value={{ counter, setCounter }}>
      {children}
    </DataContext.Provider>
  );
}

export default DataProvider;
