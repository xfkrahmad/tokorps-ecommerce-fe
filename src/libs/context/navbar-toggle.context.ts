import React, { ReactElement, ReactNode, createContext, useState } from 'react';

export type NavbarToggleCtxType = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const NavbarToggleCtx = React.createContext<NavbarToggleCtxType | null>(
  null
);
