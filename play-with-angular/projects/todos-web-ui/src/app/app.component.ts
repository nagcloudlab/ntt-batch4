import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


type Todo = {
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  todos: Todo[] = [];

  title: string = ''

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get<Todo[]>('http://localhost:3000/api/v1/todos')
      .subscribe((todos: Todo[]) => this.todos = todos);
  }

  handleKeyup(event: KeyboardEvent) {
    const { code } = event;
    console.log(code)
    if (code !== 'Enter') {
      return
    }
    const input = event.target as HTMLInputElement;
    const title = input.value;
    input.value = '';
    this.httpClient.post<Todo>('http://localhost:3000/api/v1/todos', { title })
      .subscribe((todo: Todo) => this.todos.push(todo));
  }

  handleDelete(todoId: number) {
    this.httpClient.delete(`http://localhost:3000/api/v1/todos/${todoId}`)
      .subscribe(() => this.todos = this.todos.filter((todo: Todo) => todo.id !== todoId));
  }

}
