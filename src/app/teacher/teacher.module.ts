import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { StoreModule } from '@ngrx/store';
import { TeacherReducer } from './state/teacher.reducer';
import { StudentListComponent } from './student-list/student-list.component';
import { EffectsModule } from '@ngrx/effects';
import { TeacherEffects } from './state/teacher.effects';

@NgModule({
  declarations: [
    StudentListComponent
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    StoreModule.forFeature('teacher',TeacherReducer),
    EffectsModule.forFeature([TeacherEffects])
  ]
})
export class TeacherModule { }
