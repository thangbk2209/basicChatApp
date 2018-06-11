import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Http, Headers, RequestOptions, ResponseOptions, Response } from '@angular/http';
import { UserService } from '../../services/user.service';
import { environment } from '../../../environments/environment';
const API_URL = environment.apiUrl;
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  err: boolean = false;
  mesUsername: string = '';
  mesPassword: string = '';
  mesEmail: string = '';
  mesSex: string = '';
  mesBirth: string = '';
  results: any;
  constructor(
    private fb: FormBuilder,
    private _router: Router,
    private _user: UserService,
    private _http: Http
  ) { }

  ngOnInit() {
    this.signupForm = this.fb.group({
      password: ['', Validators.required],
      // confirm_password: [null, [Validators.required, passwordConfirming]],
      username: ['', Validators.required],
      email: ['', Validators.required],
      sex: ['', Validators.required],
      birth: ['', Validators.required],
      address: [''],
      name: [''],
    });
  }
  createRange(start: number, end: number) {
    var items: number[] = [];
    for (var i = start; i <= end; i++) {
      items.push(i);
    }
    return items;
  }
  
  onSubmit() {
    console.log("submited!!!");
    if (this.signupForm.controls.email.invalid) {
      this.mesEmail = 'Email is required!';
      this.err = true;
    }
    if (this.signupForm.controls.sex.invalid) {
      this.mesSex = 'Sex is required!';
      this.err = true;
    }
    if (this.signupForm.controls.birth.invalid) {
      this.mesBirth = 'Year of birth is required!';
      this.err = true;
    }
    if (this.signupForm.controls.username.invalid) {
      this.mesUsername = 'Username is required!';
      this.err = true;
    }
    if (this.signupForm.controls.password.invalid) {
      this.mesPassword = 'Password is required!';
      this.err = true;
    }

    console.log(this.err);
    if (this.err === false) {
      this._http
      .get(API_URL + '/user').subscribe(data => {
        // Read the result field from the JSON response.
        this.results = data;
      }); 
      // console.log(data);
      //   if (data) {
      //     this._toastr.success('Success!', 'Register success!');
      //     this._router.navigate(['/login']);
      //   }
      //   else if (!data.success) {
      //     this._toastr.error('Error!', 'Register fail!');
      //   }
      //   else {
      //     this._toastr.error('Error!', 'Register fail!');
      //   }

      // }, err => {
      //   this._toastr.error('Error!', 'Register fail!');
      // })
      }
    }
  }
