import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  userToDOTaskObj: any;
  taskName: string;
  constructor() {
    this.userToDOTaskObj = [];
    this.taskName = '';
  }

  ngOnInit() {}

  addToDoTask(taskName) {
    this.userToDOTaskObj.push({
      taskName: taskName
    });
    this.taskName = '';
    console.log('Tasks : ', this.userToDOTaskObj);
  }

  editToDoTask(task) {
    console.log('Edit : ', task);
  }
}
