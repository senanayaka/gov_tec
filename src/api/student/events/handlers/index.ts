import { StudentCreatedHandler} from './student-created.handler';
import { StudentCommonHandler} from './student-common.handler';
import { StudentDeletedHandler} from './student-suspend.handler';
import { NotificationHandler } from './notification.handler';

export const EventHandlers = [
  StudentCreatedHandler,
  StudentCommonHandler,
  StudentDeletedHandler,
  NotificationHandler,
];
