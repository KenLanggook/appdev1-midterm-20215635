tasks = [];

constructor(private taskService: TaskService) {}

ngOnInit() {
  this.tasks = this.taskService.getTasks();
}

deleteTask(id: number) {
  if (confirm('Delete this task?')) {
    this.taskService.deleteTask(id);
  }
}

toggleStatus(id: number) {
  this.taskService.toggleStatus(id);
}