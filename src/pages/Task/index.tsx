import { Header } from '../../components/Header';

import { Fab } from './components/Fab';
import { EditedTaskModal } from './components/Modals/EditedTaskModal';
import { NewTaskModal } from './components/Modals/NewTaskModal';
import { TaskContext, TaskContextProvider } from './components/TaskContext';
import { Tasks } from './components/Tasks';
import { Container } from './style';

export function Task() {
  return (
    <TaskContextProvider>
      <TaskContext.Consumer>
        {({ taskBeingEdited }) => (
          <>
            <Header />

            <Container>
              <div className="title">
                <h1>Suas tarefas!</h1>
              </div>

              <div className="tasks">
                <Tasks />
              </div>

              <Fab />
              <NewTaskModal />
              {taskBeingEdited && <EditedTaskModal />}
            </Container>
          </>
        )}
      </TaskContext.Consumer>
    </TaskContextProvider>
  );
}
