import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { setLoadingSpinner } from 'src/app/store/shared/shared.actions';
import { loadStudentList } from '../state/teacher.actions';
import { getStudents } from '../state/teacher.selector';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  public studentList:any = [];
  constructor(private store: Store) { }

  ngOnInit() {
    this.store.dispatch(setLoadingSpinner({ status: true }))
    this.store.dispatch(loadStudentList());
    this.getStudentList();
  }

  async getStudentList(){
    await this.store.select(getStudents).subscribe((res)=>{
      this.studentList = res.studentList;
    });
  }
}
