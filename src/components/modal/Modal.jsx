import React from 'react';

import ModalForm from '../forms/ModalForm';
import { StyledModal } from './styles/StyledModal.style';

export default function Modal() {
  return (
    <StyledModal data-testid="modal-container">
      <ModalForm />
    </StyledModal>
  );
}
