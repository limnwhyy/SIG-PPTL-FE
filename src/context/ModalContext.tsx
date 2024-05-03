import { useContext, createContext, useState } from "react";

export interface ModalContextProps {
  show: boolean;
  setShow: (value: boolean) => void;
}

const ModalContext = createContext<ModalContextProps>({
  show: false,
  setShow: (_value: boolean) => {},
});

export const useModal = () => {
  return useContext(ModalContext);
};

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [show, setShow] = useState<boolean>(false);
  const value: ModalContextProps = { show, setShow };
  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};
