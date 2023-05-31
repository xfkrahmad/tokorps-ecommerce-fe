'use client';
import { NavbarToggleCtx } from '@/libs/context/navbar-toggle.context';
import { ReactNode, useState } from 'react';

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  const [open, setOpen] = useState(false);
  return (
    <NavbarToggleCtx.Provider value={{ open, setOpen }}>
      {children}
    </NavbarToggleCtx.Provider>
  );
};

export default Providers;
