import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
             selector: 'todo-list',
             imports: [FormsModule],
             templateUrl: './todo-list.html',
             styleUrls: ['./todo-list.scss']
           }) export class TodoList {
  tasks: string[] = [];
  newTask: string = '';

  addTask() {
    if (!this.newTask.trim()) {
      this.newTask =
        '';
      return;
    }

    this.tasks.push(this.newTask);
    this.newTask =
      '';
  }

  removeTask(index: number) {
    this.tasks.splice(index,
                      1);
  }

}
