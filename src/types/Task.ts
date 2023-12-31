export interface ITask {
  id: string;
  name: string;
  description: string | null;
  categoryId: string;
  dueDate: string;
  done: boolean;
  categoryTask: {
    id: string;
    name: string;
    icon: string;
  };
}
