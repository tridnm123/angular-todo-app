import { Component, OnInit } from '@angular/core';
import { TaskComponent } from '../task/task.component';
import { TaskStatus } from '../enum/taskEnum';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  tasks : TaskComponent[] = [];
  map = new Map<string, string[]>()
    .set(TaskStatus[TaskStatus.TODO], ['', TaskStatus[TaskStatus["IN-PROGRESS"]], TaskStatus[TaskStatus.ARCHIVE]])
    .set(TaskStatus[TaskStatus["IN-PROGRESS"]], ['', TaskStatus[TaskStatus.DONE]])
    .set(TaskStatus[TaskStatus.DONE], ['', TaskStatus[TaskStatus.ARCHIVE]])
    .set(TaskStatus[TaskStatus.ARCHIVE], []);

  parentSubmit(event: any) {
    console.log('Parent Submit');
    this.tasks.push(event);
  }

  onSelectClick(task: any, newStatus: string){
    task.status = newStatus;
  }

  // availableStatus(status): string[] {
  //   switch(status) {
  //     case TaskStatus[TaskStatus.TODO]: {
  //       return [TaskStatus[TaskStatus["IN-PROGRESS"]], TaskStatus[TaskStatus.ARCHIVE]];
  //     }
  //     case TaskStatus[TaskStatus[TaskStatus["IN-PROGRESS"]]]: {
  //       return [TaskStatus[TaskStatus.DONE]];
  //     }
  //     case TaskStatus[TaskStatus[TaskStatus.DONE]]: {
  //       return [TaskStatus[TaskStatus.ARCHIVE]];
  //     }
  //     default: {
  //       return [];
  //     }
  //  }
  // }
}
