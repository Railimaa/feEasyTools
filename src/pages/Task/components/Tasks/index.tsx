import { EmptyTasks } from '../../../../assets/Icons/EmptyTasks';
import { FilterIcon } from '../../../../assets/Icons/FIlterIcon';
import { Spinner } from '../../../../components/Spinner';

import Card from './Card';
import { InputSearch } from './SearchInput';
import { SearchNotFound } from './SearchNotFound';
import { Container } from './style';
import { useTasks } from './useTasks';

export function Tasks() {
  const {
    isLoading,
    tasks,
    handleOpenEditTaskModal,
    searchInput,
    handleChangeSearchInput,
    tasksFiltered,
  } = useTasks();

  const hasTasks = tasks.length > 0;
  const isEmptyList = tasks.length > 0 && tasksFiltered.length < 1;

  return (
    <Container>
      {isLoading && (
        <div className="isLoading">
          <Spinner width="40" height="40" />
        </div>
      )}

      {!isLoading && !hasTasks && (
        <div className="notTasks">
          <EmptyTasks width="85" height="85" />
          <span>Nenhuma tarefa foi encontrada!</span>
        </div>
      )}

      {!isLoading && hasTasks && (
        <>
          <div className="searchAndFilters">
            <InputSearch
              value={searchInput}
              onChange={handleChangeSearchInput}
              placeholder="Pesquisar tarefas..."
            />

            <FilterIcon />
          </div>

          {isEmptyList && <SearchNotFound searchValue={searchInput} />}

          <div className="content">
            <Card
              taskFiltered={tasksFiltered}
              handleOpenEditTaskModal={handleOpenEditTaskModal}
            />
          </div>
        </>
      )}
    </Container>
  );
}
