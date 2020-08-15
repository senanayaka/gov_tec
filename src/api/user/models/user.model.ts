import { AggregateRoot } from '@nestjs/cqrs';
import { UserCreatedEvent } from '../events/impl/user-created.event';
import { UserDto } from '../dtos/user.dto';

export class User extends AggregateRoot {
  [x: string]: any;

  constructor(private readonly id: string | undefined) {
    super();
  }

  setData(data) {
    this.data = data;
  }

}
