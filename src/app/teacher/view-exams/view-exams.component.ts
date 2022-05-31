import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { setLoadingSpinner } from 'src/app/store/shared/shared.actions';
import { viewExams } from '../state/teacher.actions';
import { getStudents } from '../state/teacher.selector';

@Component({
  selector: 'app-view-exams',
  templateUrl: './view-exams.component.html',
  styleUrls: ['./view-exams.component.scss']
})
export class ViewExamsComponent implements OnInit {

  public examList:any =[];
  constructor(private store:Store) { }

  ngOnInit(): void {
    this.store.dispatch(setLoadingSpinner({status:true}))
    this.store.dispatch(viewExams());
    this.store.select(getStudents).subscribe((res)=>{
      this.examList = res.examList;
    })
  }

}
