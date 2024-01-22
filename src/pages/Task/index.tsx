import { Header } from '../../components/Header';

import { Categories } from './components/Categories';
import { Fab } from './components/Fab';
import { EditedTaskModal } from './components/Modals/EditedTaskModal';
import { NewCategoryModal } from './components/Modals/NewCategoryModal';
import { NewTaskModal } from './components/Modals/NewTaskModal';
import { TaskContext, TaskContextProvider } from './components/TaskContext';
import { Tasks } from './components/Tasks';
import { Title } from './components/Title';
import { Container } from './style';

export default function Task() {
  return (
    <TaskContextProvider>
      <TaskContext.Consumer>
        {({ taskBeingEdited }) => (
          <>
            <Header />

            <Container>
              <div className="titleTasks">
                <Title word="Tarefas" animation="X" />
              </div>

              <div className="tasks">
                <Tasks />
              </div>

              <div className="titleCategories">
                <Title word="Categorias" animation="Y" />
              </div>

              <div className="categories">
                <Categories />
              </div>

              <Fab />
              <NewTaskModal />
              {taskBeingEdited && <EditedTaskModal />}
              <NewCategoryModal />
            </Container>
          </>
        )}
      </TaskContext.Consumer>
    </TaskContextProvider>
  );
}
