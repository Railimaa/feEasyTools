/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useCallback, useState } from 'react';

import { ITask } from '../../../../types/Task';

interface ITaskContext {
  openNewTaskModal: boolean;
  handleOpenNewTaskModal: () => void;
  handleCloseNewTaskModal: () => void;
  openEditedTaskModal: boolean;
  taskBeingEdited: null | ITask;
  handleOpenEditTaskModal: (task: ITask) => void;
  handleCloseEditTaskModal: () => void;
  openNewCategoryModal: boolean;
  handleOpenCategoryModal: () => void;
  handleCloseCategoryModal: () => void;
}

export const TaskContext = createContext({} as ITaskContext);

export function TaskContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [openNewTaskModal, setOpenNewTaskModal] = useState<boolean>(false);
  const [openEditedTaskModal, setOpenEditedTaskModal] =
    useState<boolean>(false);
  const [taskBeingEdited, setTaskBeingEdited] = useState<null | ITask>(null);
  const [openNewCategoryModal, setOpenNewCategoryModal] =
    useState<boolean>(false);

  const handleOpenNewTaskModal = useCallback(() => {
    setOpenNewTaskModal(true);
  }, []);

  const handleCloseNewTaskModal = useCallback(() => {
    setOpenNewTaskModal(false);
  }, []);

  const handleOpenEditTaskModal = useCallback((task: ITask) => {
    setOpenEditedTaskModal(true);
    setTaskBeingEdited(task);
  }, []);

  const handleCloseEditTaskModal = useCallback(() => {
    setOpenEditedTaskModal(false);
    setTaskBeingEdited(null);
  }, []);

  const handleOpenCategoryModal = useCallback(() => {
    setOpenNewCategoryModal(true);
  }, []);

  const handleCloseCategoryModal = useCallback(() => {
    setOpenNewCategoryModal(false);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        openNewTaskModal,
        handleOpenNewTaskModal,
        handleCloseNewTaskModal,
        openEditedTaskModal,
        taskBeingEdited,
        handleOpenEditTaskModal,
        handleCloseEditTaskModal,
        openNewCategoryModal,
        handleOpenCategoryModal,
        handleCloseCategoryModal,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}
