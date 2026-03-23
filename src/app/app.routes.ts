import { Routes } from '@angular/router';
import { TaskListComponent } from './comps/task-list/task-list.component';
import { TaskAddComponent } from './comps/task-add/task-add.component';
import { TaskDetailsComponent } from './comps/task-details/task-details.component';
import { TaskInfoComponent } from './comps/task-info/task-info.component';
import { TaskEditComponent } from './comps/task-edit/task-edit.component';

export const routes: Routes = [
  { path: '', redirectTo: 'tasks', pathMatch: 'full' },
  { path: 'tasks', component: TaskListComponent },
  { path: 'tasks/new', component: TaskAddComponent },
  {
    path: 'tasks/:id',
    component: TaskDetailsComponent,
    children: [
      { path: '', redirectTo: 'info', pathMatch: 'full' },
      { path: 'info', component: TaskInfoComponent },
      { path: 'edit', component: TaskEditComponent },
    ],
  },
];
