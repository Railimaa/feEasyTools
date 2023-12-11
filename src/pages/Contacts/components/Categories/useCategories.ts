import { useQueryClient } from '@tanstack/react-query';
import React, { useDeferredValue, useMemo, useState } from 'react';
import toast from 'react-hot-toast';

import { useCategoriesContacts } from '../../../../hooks/useCategoriesContact';
import { categoriesContactService } from '../../../../services/categoriesContactService';
import { ICategoryContact } from '../../../../types/CategoryContact';
import { useContactContext } from '../ContactContext/useContactContext';

export function useCategories() {
  const { handleOpenEditedCategoryModal } = useContactContext();
  const { categoriesContact, isFetching } = useCategoriesContacts();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);
  const [categoryBeingDelete, setCategoryBeingDelete] =
    useState<null | ICategoryContact>(null);
  const [searchValue, setSearchValue] = useState<string>('');

  const deferedSearchValue = useDeferredValue(searchValue);
  const categoriesFiltered = useMemo(
    () =>
      categoriesContact.filter((category) =>
        category.name.toLowerCase().includes(deferedSearchValue.toLowerCase()),
      ),
    [categoriesContact, deferedSearchValue],
  );

  function handleChangeSearchValue(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchValue(event.target.value);
  }

  function handleOpenDeleteModal(category: ICategoryContact) {
    setOpenDeleteModal(true);
    setCategoryBeingDelete(category);
  }

  function handleCloseDeleteModal() {
    setOpenDeleteModal(false);
    setCategoryBeingDelete(null);
  }

  const useQuery = useQueryClient();
  async function handleDeleteCategory() {
    try {
      setIsLoading(true);

      await categoriesContactService.deleted(categoryBeingDelete!.id);
      useQuery.invalidateQueries(['categoryContact']);
      useQuery.invalidateQueries(['contacts']);
      handleCloseDeleteModal();
      toast.success('Categoria deletada com sucesso!');
    } catch {
      toast.error('Erro ao deletar categoria!');
    } finally {
      setIsLoading(false);
    }
  }

  return {
    categories: categoriesContact,
    isLoading: isFetching,
    handleOpenEditedCategoryModal,
    handleOpenDeleteModal,
    handleCloseDeleteModal,
    handleDeleteCategory,
    openDeleteModal,
    isLoadingDelete: isLoading,
    searchValue,
    handleChangeSearchValue,
    categoriesFiltered,
  };
}
