import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  searchQuery = '';

  constructor(private taskService: TaskService) {}

  get filteredTasks(): Task[] {
    const q = this.searchQuery.trim().toLowerCase();
    if (!q) {
      return this.tasks;
    }
    return this.tasks.filter(
      (t) =>
        t.title.toLowerCase().includes(q) ||
        t.status.toLowerCase().includes(q) ||
        t.priority.toLowerCase().includes(q),
    );
  }

  ngOnInit() {
    this.tasks = this.taskService.getTasks();
  }

  toggleStatus(id: number) {
    this.taskService.toggleStatus(id);
    this.tasks = this.taskService.getTasks();
  }
}
