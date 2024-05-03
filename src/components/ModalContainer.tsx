import "./ModalContainerStyle.css";

const ModalContainer = ({
  children,
  isOpen,
}: {
  children: React.ReactNode;
  isOpen: boolean;
}) => {
  return (
    <div className={`modal-container ${isOpen ? "show" : "hide"}`}>
      {children}
    </div>
  );
};

export default ModalContainer;
