import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import toast from 'react-hot-toast';

import { contactsService } from '../../../../../services/contacts';
import { IContact } from '../../../../../types/Contact';

export function useCard() {
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);
  const [contactIdBeingDelete, setContactIdBeingDelete] =
    useState<null | IContact>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  function handleOpenDeleteModal(contactId: IContact) {
    setOpenDeleteModal(true);
    setContactIdBeingDelete(contactId);
  }

  function handleCloseDeleteModal() {
    setOpenDeleteModal(false);
    setContactIdBeingDelete(null);
  }

  const useQuery = useQueryClient();
  async function handleDeleteContact() {
    try {
      setIsLoading(true);

      await contactsService.deleted(contactIdBeingDelete!.id);
      useQuery.invalidateQueries(['contacts']);
      handleCloseDeleteModal();
      toast.success('Contato deletado com sucesso!');
    } catch {
      toast.error('Erro ao deletar contato!');
    } finally {
      setIsLoading(false);
    }
  }

  return {
    openDeleteModal,
    handleOpenDeleteModal,
    handleCloseDeleteModal,
    handleDeleteContact,
    isLoading,
  };
}
