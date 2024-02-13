import { createContext, Dispatch, SetStateAction } from "react";

type DynamicScreenHeightContextType = {
  setScreenHeight: Dispatch<SetStateAction<number>>;
};

export const DynamicScreenHeightContext =
  createContext<DynamicScreenHeightContextType>({
    setScreenHeight: () => {},
  });
