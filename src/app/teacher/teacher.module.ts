import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { StoreModule } from '@ngrx/store';
import { TeacherReducer } from './state/teacher.reducer';
import { StudentListComponent } from './student-list/student-list.component';
import { EffectsModule } from '@ngrx/effects';
import { TeacherEffects } from './state/teacher.effects';
import { CreateExamComponent } from './create-exam/create-exam.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewExamsComponent } from './view-exams/view-exams.component';

@NgModule({
  declarations: [
    StudentListComponent,
    CreateExamComponent,
    ViewExamsComponent
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    ReactiveFormsModule,
    StoreModule.forFeature('teacher',TeacherReducer),
    EffectsModule.forFeature([TeacherEffects])
  ]
})
export class TeacherModule { }
