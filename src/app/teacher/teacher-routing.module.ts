import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateExamComponent } from './create-exam/create-exam.component';
import { StudentListComponent } from './student-list/student-list.component';
import { TeacherComponent } from './teacher.component';
import { ViewExamsComponent } from './view-exams/view-exams.component';

const routes: Routes = [
  {
    path:'',
    component:TeacherComponent
  },
  {
    path:'student-list',
    component:StudentListComponent
  },
  {
    path:'create-exam',
    component:CreateExamComponent
  },
  {
    path:'view-exams',
    component:ViewExamsComponent
  },
  {
    path:'**',
    redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
