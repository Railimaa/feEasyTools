import React, { useDeferredValue, useMemo, useState } from 'react';

import { useTaskss } from '../../../../hooks/useTasks';
import { useTaskContext } from '../TaskContext/useTaskContext';

export function useTasks() {
  const { handleOpenEditTaskModal } = useTaskContext();
  const { tasks, isLoading } = useTaskss();

  const [searchInput, setSearchInput] = useState<string>('');

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
    isLoading,
    tasks,
    handleOpenEditTaskModal,
    searchInput,
    handleChangeSearchInput,
    tasksFiltered,
  };
}
