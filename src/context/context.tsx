import { useState } from 'react';
import { MyContext } from './useStateContext';
import type { SharingState } from '../types/typeProvider';

interface ProviderProps {
  children: React.ReactNode
}

const Provider = ({ children }: ProviderProps) => {
  const [sharingState, setSharingSate] = useState<SharingState>({
    favorites: [],
    characterInfo: {}
  });

  return (
    <MyContext.Provider value={{ sharingState, setSharingSate }}>
      {children}
    </MyContext.Provider >
  )
}

export default Provider;
