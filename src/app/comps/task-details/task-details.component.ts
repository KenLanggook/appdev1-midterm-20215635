import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-details',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './task-details.component.html',
  styleUrl: './task-details.component.css',
})
export class TaskDetailsComponent {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private taskService: TaskService,
  ) {}

  deleteTask() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (confirm('Delete this task?')) {
      this.taskService.deleteTask(id);
      this.router.navigate(['/tasks']);
    }
  }
}
