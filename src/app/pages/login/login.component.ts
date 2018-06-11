import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Http, Headers, RequestOptions, ResponseOptions, Response } from '@angular/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  err: boolean = false;
  mesUsername: string = '';
  mesPassword: string = '';
  constructor(private fb: FormBuilder) { 
    this.loginForm = this.fb.group({
      password: ['', Validators.required],
      username: ['', Validators.required],
    });
  }

  ngOnInit() {
  }

}
