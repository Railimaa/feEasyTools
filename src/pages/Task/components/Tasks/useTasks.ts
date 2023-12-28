import React, { useDeferredValue, useEffect, useMemo, useState } from 'react';

import { useTaskss } from '../../../../hooks/useTasks';
import { TaskFilter } from '../../../../services/taskService/getAll';
import { useTaskContext } from '../TaskContext/useTaskContext';

export function useTasks() {
  const { handleOpenEditTaskModal } = useTaskContext();

  const [searchInput, setSearchInput] = useState<string>('');
  const [openFilterModal, setOpenFilterModal] = useState<boolean>(false);
  const [filters, setFilters] = useState<TaskFilter>({});

  const { tasks, isLoading, initialLoading, refetchTasks } = useTaskss(filters);

  function handleOpenFilterModal() {
    setOpenFilterModal(true);
  }

  function handleCloseFilterModal() {
    setOpenFilterModal(false);
  }

  function handleApplyFilterCategoryId(categoryId: string | undefined) {
    setFilters((prevState) => ({
      ...prevState,
      categoryId,
    }));
    handleCloseFilterModal();
  }

  function handleApplyFilterTypeTask(type: boolean | undefined) {
    setFilters((prevState) => ({
      ...prevState,
      type,
    }));
  }

  useEffect(() => {
    refetchTasks();
  }, [filters, refetchTasks]);

  function handleChangeSearchInput(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchInput(event.target.value);
  }

  const deferedSearchValue = useDeferredValue(searchInput);
  const tasksFiltered = useMemo(
    () =>
      tasks.filter((task) =>
        task.name.toLowerCase().includes(deferedSearchValue.toLowerCase()),
      ),
    [tasks, deferedSearchValue],
  );

  return {
    initialLoading,
    isLoading,
    tasks,
    handleOpenEditTaskModal,
    searchInput,
    handleChangeSearchInput,
    tasksFiltered,
    openFilterModal,
    handleOpenFilterModal,
    handleCloseFilterModal,
    handleApplyFilterCategoryId,
    handleApplyFilterTypeTask,
    filters,
  };
}
