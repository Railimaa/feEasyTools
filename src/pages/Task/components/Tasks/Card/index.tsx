import { CheckCircledIcon, CrossCircledIcon } from '@radix-ui/react-icons';
import { memo } from 'react';

import { ITask } from '../../../../../types/Task';
import { FormatDate } from '../../../../../utils/formatDate';
import { IconsCategory } from '../../IconsDropdown/IconsCategory';
import { iconsMap } from '../../IconsDropdown/IconsCategory/iconsMap';

import { Container } from './style';

interface ICardProps {
  taskFiltered: ITask[];
  handleOpenEditTaskModal: (task: ITask) => void;
}

function Card({ taskFiltered, handleOpenEditTaskModal }: ICardProps) {
  return taskFiltered.map((task) => (
    <Container
      onClick={() => handleOpenEditTaskModal(task)}
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
          {task.categoryId && (
            <small>
              {task.categoryTask.icon && (
                <IconsCategory
                  iconName={task.categoryTask.icon as keyof typeof iconsMap}
                />
              )}

              {task.categoryTask.name}
            </small>
          )}

          <span>{FormatDate(new Date(task.dueDate))}</span>
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

export default memo(Card);
