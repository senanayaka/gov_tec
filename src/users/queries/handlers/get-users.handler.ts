import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { UserRepository } from '../../repository/user.repository';
import { GetUsersQuery } from '../impl/get-users.query';

@QueryHandler(GetUsersQuery)
export class GetUsersHandler implements IQueryHandler<GetUsersQuery> {

  constructor(private readonly repository: UserRepository) {}

  async execute(query: GetUsersQuery) {
    return this.repository.findAll();
  }

}
