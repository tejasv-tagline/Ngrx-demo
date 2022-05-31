import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { setLoadingSpinner } from 'src/app/store/shared/shared.actions';
import { createExam } from '../state/teacher.actions';

@Component({
  selector: 'app-create-exam',
  templateUrl: './create-exam.component.html',
  styleUrls: ['./create-exam.component.scss']
})
export class CreateExamComponent implements OnInit {
  public myForm : any;
  public address!: FormGroup;
  public mobile !: FormArray;
  public questions !: FormArray;
  public notes !: FormArray;
  public options!: FormGroup;
  public extraArray = [];
  public optionsAll = [];
  public isformFormatted: boolean = false;
  public isCreateExamHide: boolean = false;
  public formLength!: number;
  public counter: number = 0;

  constructor(
    private fb: FormBuilder,
    private store:Store
  ) {
    this.myForm = this.fb.group({
      subjectName: ['Testing exam', [Validators.required]],
      questions: this.fb.array([]),
      notes: this.fb.array([new FormControl('Exam is for 30 minutes', Validators.required)]),
    });
  }

  ngOnInit(): void {
    this.addQuestion();
  }

  get noteControl(): FormArray {
    return this.myForm.get('notes') as FormArray;
  }

  get questionArray(): FormArray {
    return this.myForm.get('questions') as FormArray;
  }

  public addNote() {
    this.noteControl.push(new FormControl(null, Validators.required));
  }

  get optionControl() {
    return this.myForm.get('options') as FormArray;
  }

  get getOptionArray(): FormArray {
    return this.formMobile.get('options') as FormArray;
  }

  public defauldControls() {
    return this.fb.group({
      question: ['Question 1', [Validators.required]],
      answer: ['Answer 1', [Validators.required]],
      options: this.fb.group({
        option1: ['Option A', [Validators.required]],
        option2: ['Option B', [Validators.required]],
        option3: ['Option C', [Validators.required]],
        option4: ['Option D', [Validators.required]],
      }),
    });
  }

  get formMobile() {
    return this.myForm.get('questions') as FormArray;
  }

  public addQuestion() {
    this.generateCounter('add');
    this.formLength = this.myForm.value.questions.length;
    if (this.formLength < 15) {
      this.formMobile.push(this.defauldControls());
    } else {
      window.alert('You can add maximum 15 questions');
    }
    if (this.formLength > 13) {
      this.isformFormatted = true;
    }
  }
  public generateCounter(param: string): void {
    if (this.counter < 15 && param === 'add') {
      this.counter = this.counter + 1;
    } 
    if(param==='remove') {
      this.counter = this.counter - 1;
    }
  }

  public removeQuestion(i: number) {
    this.generateCounter('remove');
    this.formMobile.removeAt(i);
  }

  public removeNote(i: number) {
    const notesRemove = this.myForm.get('notes') as FormArray;
    notesRemove.removeAt(i);
  }

  public onSubmit(): void {
    const { subjectName, questions, notes } = this.myForm.value;
    const data: any = {};
    const finalQuestions: any = [];
    data.subjectName = subjectName;
    data.notes = notes;
    questions.forEach((element:any) => {
      const finalElement: any = {};
      const dummyElement: any = {};
      finalElement.question = element.question;
      finalElement.answer = element.answer;
      finalElement.options = [];
      dummyElement.options = [];
      dummyElement.options.push(Object.values(element.options));
      dummyElement.options.forEach((element:any) => {
        finalElement.options = element;
      });
      finalQuestions.push(finalElement);
    });

    data.questions = finalQuestions;
    this.store.dispatch(setLoadingSpinner({ status: true }))
    this.store.dispatch(createExam({exam : data}))
  }
}
