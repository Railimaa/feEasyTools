import { create } from './create';
import { deleted } from './delete';
import { getAll } from './getAll';
import { update } from './update';

export const taskService = {
  getAll,
  create,
  update,
  deleted,
};
