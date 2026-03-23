import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: Task[] = [
    {
      id: 1,
      title: 'Finish Project',
      description: 'Complete Angular midterm',
      dueDate: '2026-03-25',
      status: 'Pending',
      priority: 'High',
    },
    {
      id: 2,
      title: 'Study Routing',
      description: 'Understand child routes',
      dueDate: '2026-03-26',
      status: 'In Progress',
      priority: 'Medium',
    },
    {
      id: 3,
      title: 'Clean Room',
      description: 'Organize workspace',
      dueDate: '2026-03-27',
      status: 'Completed',
      priority: 'Low',
    },
  ];

  getTasks() {
    return this.tasks;
  }

  getTaskById(id: number) {
    return this.tasks.find((task) => task.id === id);
  }

  addTask(task: Task) {
    this.tasks.push(task);
  }

  updateTask(updatedTask: Task) {
    const index = this.tasks.findIndex((t) => t.id === updatedTask.id);
    if (index !== -1) {
      this.tasks[index] = updatedTask;
    }
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  toggleStatus(id: number) {
    const task = this.getTaskById(id);
    if (task) {
      if (task.status === 'Pending') task.status = 'In Progress';
      else if (task.status === 'In Progress') task.status = 'Completed';
      else task.status = 'Pending';
    }
  }
}
