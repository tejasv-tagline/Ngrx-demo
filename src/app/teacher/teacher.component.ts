import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent implements OnInit {

  public cardArray = [
    {
      title:'Create Exam',
      routerUrl:'create-exam',
      cardColor:'blue'
    },
    {
      title:'View Exam',
      routerUrl:'view-exam',
      cardColor:'green'
    },
    {
      title:'Student List',
      routerUrl:'student-list',
      cardColor:'yellow'
    },
    // {
    //   title:'Create Exam',
    //   routerUrl:'create-exam'
    // }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
