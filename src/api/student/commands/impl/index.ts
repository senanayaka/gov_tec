import { CreateStudentCommand } from './create-student.command';
import { SuspendStudentCommand } from './suspend-student.command';
import { CommonStudentCommand } from './get-common-student.command';
import { NotificationCommand } from './notification.command';

export const CommandHandlers = [
  CreateStudentCommand,
  SuspendStudentCommand,
  CommonStudentCommand,
  NotificationCommand,
];
