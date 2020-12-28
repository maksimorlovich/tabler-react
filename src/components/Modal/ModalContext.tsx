import React from "react";

type ModalContext = {
  onDismiss: () => void;
};

export default React.createContext<ModalContext>({
  onDismiss() {},
});
