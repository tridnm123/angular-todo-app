import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { TaskStatus } from '../enum/taskEnum';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  constructor(private fb: FormBuilder) { }

  @Output() childSubmit = new EventEmitter<any>();

  descriptionMaxLength = 250
  task = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.compose(
            [Validators.maxLength(this.descriptionMaxLength), Validators.required])],
    status: TaskStatus[TaskStatus.TODO],
  });

  onSubmit() {
    if (this.task.valid) {
      console.log(this.task.value);
      this.childSubmit.emit(this.task.value);
}
  }

  omit_special_char(event) {
    var k;
    k = event.charCode;
    return((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 32 || (k >= 48 && k <= 57));
  }
}
