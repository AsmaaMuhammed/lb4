import { DefaultCrudRepository, juggler, HasManyRepositoryFactory } from '@loopback/repository';
import { TodoList, Todo } from '../models';
import { TodoRepository } from './todo.repository';
import { Getter } from '@loopback/core';
export declare class TodoListRepository extends DefaultCrudRepository<TodoList, typeof TodoList.prototype.id> {
    protected todoRepositoryGetter: Getter<TodoRepository>;
    readonly todos: HasManyRepositoryFactory<Todo, typeof TodoList.prototype.id>;
    constructor(dataSource: juggler.DataSource, todoRepositoryGetter: Getter<TodoRepository>);
}
