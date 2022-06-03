import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TeacherService } from 'src/app/services/teacher.service';
import { setLoadingSpinner } from 'src/app/store/shared/shared.actions';
import { deleteExam, removerOldViewvingExam, viewExams, viewParticulaExam, viewParticulaExamSuccess } from '../state/teacher.actions';
import { getStudents } from '../state/teacher.selector';

@Component({
  selector: 'app-view-exams',
  templateUrl: './view-exams.component.html',
  styleUrls: ['./view-exams.component.scss']
})
export class ViewExamsComponent implements OnInit {

  public examList:any =[];
  public allQuestionBunch:any =[];

  constructor(private store:Store,private teacherService:TeacherService) { }

  ngOnInit(): void {
    this.store.dispatch(setLoadingSpinner({status:true}))
    this.store.dispatch(viewExams());
    this.store.select(getStudents).subscribe((res)=>{
      this.examList = res.examList;
    })
  }

  deleteExam(id:string){
    console.log('id :>> ', id);
    this.store.dispatch(deleteExam({id}));
  }

  async viewSingleExam(id:string){
    // this.teacherSerivce
    // this.store.removeReducer<any>(viewParticulaExamSuccess);
    this.store.dispatch(removerOldViewvingExam())
    this.store.dispatch(viewParticulaExam({id}))
    await this.store.select(getStudents).subscribe((res)=>{
      console.log('res :>> ', res);
      this.allQuestionBunch = res.viewvingExam;
      console.log('this.allQuestionBunch :>> ', this.allQuestionBunch);
    })
  }
}
