import { CreateStudentHandler } from './create-student.handler';
import { SuspendStudentHandler } from './suspend-student.handler';
import { CommonStudentHandler } from './get-common-student.handler';
import { notificationHandler } from './notification.handler';

export const CommandHandlers = [
  CreateStudentHandler,
  SuspendStudentHandler,
  CommonStudentHandler,
  notificationHandler,
];
