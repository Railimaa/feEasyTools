import React, { useDeferredValue, useMemo, useState } from 'react';

import { useCategorieTask } from '../../../../hooks/useCategoriesTask';
import { ICategoryTask } from '../../../../types/CategoryTask';

export function useCategories() {
  const { categoriesTask, isLoading } = useCategorieTask();

  const [searchInput, setSearchInput] = useState<string>('');
  const [openEditedCategoryModal, setOpenEditedCategoryModal] =
    useState<boolean>(false);
  const [categoryBeingEdited, setCategoryBeingEdited] =
    useState<null | ICategoryTask>(null);

  function handleChangeSearchInput(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchInput(event.target.value);
  }

  const deferedValueSearch = useDeferredValue(searchInput);
  const categoriesFiltered = useMemo(
    () =>
      categoriesTask.filter((category) =>
        category.name.toLowerCase().includes(deferedValueSearch.toLowerCase()),
      ),
    [categoriesTask, deferedValueSearch],
  );

  function handleOpenEditedCategoryModal(category: ICategoryTask) {
    setOpenEditedCategoryModal(true);
    setCategoryBeingEdited(category);
  }

  function handleCloseEditedCategoryModal() {
    setOpenEditedCategoryModal(false);
    setCategoryBeingEdited(null);
  }

  return {
    categories: categoriesTask,
    isLoading,
    openEditedCategoryModal,
    categoryBeingEdited,
    handleOpenEditedCategoryModal,
    handleCloseEditedCategoryModal,
    searchInput,
    handleChangeSearchInput,
    categoriesFiltered,
  };
}
