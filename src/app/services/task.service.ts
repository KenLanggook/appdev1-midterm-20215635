import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: Task[] = [
    {
      id: 1,
      title: 'Maglaba',
      description: 'Maglaba ng mga damit',
      dueDate: '2026-03-28',
      status: 'Pending',
      priority: 'Medium',
    },
    {
      id: 2,
      title: 'Magigib',
      description: 'Magigib ng tubig na maiinom',
      dueDate: '2026-03-26',
      status: 'Pending',
      priority: 'Low',
    },
    {
      id: 3,
      title: 'Maglinis sa bahay',
      description: 'May darating na bisita',
      dueDate: '2026-03-29',
      status: 'Completed',
      priority: 'High',
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
