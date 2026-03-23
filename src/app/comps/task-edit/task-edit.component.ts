import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Task } from '../../models/task.model';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-edit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-edit.component.html',
  styleUrl: './task-edit.component.css',
})
export class TaskEditComponent implements OnInit {
  id!: number;
  task!: Task;

  constructor(
    private route: ActivatedRoute,
    private service: TaskService,
  ) {}

  ngOnInit() {
    this.id = Number(this.route.parent?.snapshot.paramMap.get('id'));
    this.task = { ...this.service.getTaskById(this.id)! };
  }

  updateTask() {
    this.service.updateTask(this.task);
  }
}
