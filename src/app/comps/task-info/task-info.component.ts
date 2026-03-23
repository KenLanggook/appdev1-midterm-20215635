import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Task } from '../../models/task.model';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-info.component.html',
  styleUrl: './task-info.component.css',
})
export class TaskInfoComponent implements OnInit {
  task!: Task;

  constructor(
    private route: ActivatedRoute,
    private service: TaskService,
  ) {}

  ngOnInit() {
    const id = Number(this.route.parent?.snapshot.paramMap.get('id'));
    const found = this.service.getTaskById(id);
    if (found) {
      this.task = found;
    }
  }
}
