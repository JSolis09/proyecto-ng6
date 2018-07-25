import { Component, OnInit } from '@angular/core';
import { Todo } from './todo';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public todo: string;
  public todos: Todo[];
  public title = 'app';

  constructor(private todoService: TodoService) {
    this.todos = [];
  }

  ngOnInit() {
    this.todoService
      .getTodos()
      .subscribe((response: Todo[]) => {
        this.todos = response;
      });
  }

  public addTodo(todo: string): void {
    this.todos.push({
      name: todo
    });
    this.todo = '';
  }

  public removeTodo(item: Todo): void {
    const index = this.todos.indexOf(item);
    this.todos.splice(index, 1);
  }
}
