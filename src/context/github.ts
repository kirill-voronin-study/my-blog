"use client";

import { createContext, useContext } from "react";

export const GithubContext = createContext("");

export function useGithubContext() {
  const context = useContext(GithubContext);

  if (!context) {
    throw new Error("useMyContext должен использоваться внутри MyProvider");
  }

  return context;
}
