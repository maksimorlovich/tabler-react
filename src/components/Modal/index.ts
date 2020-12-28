import Modal from "./Modal";

import ModalHeader from "./ModalHeader";
import ModalBody from "./ModalBody";
import ModalFooter from "./ModalFooter";
import ModalButton from "./ModalButton";

const CompoundModal = Modal as typeof Modal & {
  Header: typeof ModalHeader;
  Body: typeof ModalBody;
  Footer: typeof ModalFooter;
  Button: typeof ModalButton;
};

// CompoundModal.displayName = "Modal";

CompoundModal.Header = ModalHeader;
CompoundModal.Body = ModalBody;
CompoundModal.Footer = ModalFooter;
CompoundModal.Button = ModalButton;

export {
  CompoundModal as default,
  // Dropdown,
  // DropdownTrigger,
  // DropdownMenu,
  // DropdownItem,
  // DropdownItemDivider,
};
