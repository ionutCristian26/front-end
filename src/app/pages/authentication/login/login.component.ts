import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { FormBuilder, FormGroup, Validators, Form } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";

declare var UIkit: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  public submitted = false;

  constructor(private auth: AuthService,
              private formBuilder: FormBuilder,
              private router: Router,
              private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['',
        [ 
          Validators.required,
          Validators.email,
        ]
      ],
      password: ['', 
      [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(8)
      ]
    ],
    });
  }

  login(user) {
    this.submitted = true;
    if (this.loginForm.invalid) {
      UIkit.notification({message: 'Please try again..', status: 'danger'})
    } else {
      const formData = new FormData();

      formData.append('password', user.password);
      formData.append('username', user.email);
      formData.append('grant_type', 'password');
      formData.append('client_id', 'user');
      formData.append('pascope', 'api');
      formData.append('client_secret', 'userApi1234567');
      this.spinner.show();
      this.auth.login(formData).subscribe(res => {
        this.spinner.hide();
        this.auth.setUser(res);
        this.router.navigate(['dashboard']);
      }, err => {
        this.spinner.hide();
        UIkit.notification({message: err.error.message, status: 'danger'})
      });
    }
  }
}
