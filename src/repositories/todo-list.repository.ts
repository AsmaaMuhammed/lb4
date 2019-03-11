import {DefaultCrudRepository, juggler, HasManyRepositoryFactory, repository} from '@loopback/repository';
import {TodoList, Todo} from '../models';
import {TodoRepository} from './todo.repository';
import {DbDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';

export class TodoListRepository extends DefaultCrudRepository<
  TodoList,
  typeof TodoList.prototype.id
> {
public readonly todos: HasManyRepositoryFactory<
    Todo,
    typeof TodoList.prototype.id
  >;
  constructor(
    @inject('datasources.db') dataSource: juggler.DataSource,
    @repository.getter(TodoRepository)
    protected todoRepositoryGetter: Getter<TodoRepository>,
  ) {
    super(TodoList, dataSource);
    this.todos = this.createHasManyRepositoryFactoryFor(
      'todos',
      todoRepositoryGetter,
    );
  }
}
