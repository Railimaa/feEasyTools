import { CheckCircledIcon, CrossCircledIcon } from '@radix-ui/react-icons';

import { ITask } from '../../../../../types/Task';
import { FormatDate } from '../../../../../utils/formatDate';

import { Container } from './style';

interface ICardProps {
  taskFiltered: ITask[];
  handleCloseEditTaskModal: (task: ITask) => void;
}

export function Card({ taskFiltered, handleCloseEditTaskModal }: ICardProps) {
  return taskFiltered.map((task) => (
    <Container
      onClick={() => handleCloseEditTaskModal(task)}
      key={task.id}
      role="button"
    >
      <div className="infos">
        <div className="titleAndDescription">
          <span>{task.name}</span>
          {task.description && (
            <small>{`${task.description.slice(0, 20)}...`}</small>
          )}
        </div>

        <div className="dateAndCategory">
          <span>{FormatDate(new Date(task.dueDate))}</span>
          <small>{task.categoryTask.name}</small>
        </div>
      </div>

      <button type="button" onClick={() => alert('Alterou status')}>
        {task.done === false && (
          <CrossCircledIcon width={20} height={20} color="#C92A2A" />
        )}

        {task.done === true && (
          <CheckCircledIcon width={20} height={20} color="#00c16c" />
        )}
      </button>
    </Container>
  ));
}
