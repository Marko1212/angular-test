import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-area',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  template:
    '' +
    '<div>' +
    '<form [formGroup]="usernameForm" (ngSubmit)="generateUsername()">' +
    '<input type="text" formControlName="firstname" id="firstname">' +
    '<input type="text" formControlName="lastname" id="lastname">' +
    '<button type="submit">Generate</button>' +
    '</form>' +
    '<span id="output">generated username...</span>' +
    '<p *ngIf="username">{{username}}</p>' +
    '</div>',
  styles: [],
})
export class AppComponent implements OnInit {
  title = 'angular-test';

  usernameForm!: FormGroup;
  username: string | undefined;

  ngOnInit(): void {
    this.usernameForm = new FormGroup({
      firstname: new FormControl('Coder', Validators.required),
      lastname: new FormControl('Byte', Validators.required),
    });
  }

  generateUsername(): void {
    const firstname = this.usernameForm?.get('firstname')?.value;
    const lastname = this.usernameForm?.get('lastname')?.value;
    const randomInit = Math.floor(Math.random() * 9) + 1;
    this.username = `${firstname.toLowerCase()}_${lastname.toLowerCase()}_${randomInit}`;
  }
}
