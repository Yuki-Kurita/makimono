import { createPortal } from "react-dom";

interface ModalProps {
  children: React.ReactNode;
  id: string;
}

export const Modal: React.FC<ModalProps> = ({ children, id }) => {
  return createPortal(
    <>{children}</>,
    document.getElementById(id) as HTMLElement
  );
};
