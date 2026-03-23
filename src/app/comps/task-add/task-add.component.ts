import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Task } from '../../models/task.model';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-add',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './task-add.component.html',
  styleUrl: './task-add.component.css',
})
export class TaskAddComponent {
  task: Task = {
    id: 0,
    title: '',
    description: '',
    dueDate: '',
    status: 'Pending',
    priority: 'Low',
  };

  constructor(
    private taskService: TaskService,
    private router: Router,
  ) {}

  addTask() {
    this.task.id = Date.now();
    this.taskService.addTask(this.task);
    alert('Task added!');
    this.router.navigate(['/tasks']);
  }
}
