import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, Form } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';

declare var UIkit: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  public submitted = false;

  constructor(private auth: AuthService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
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
      passwordConfirm: ['',
        [
          Validators.required,
          // this.passwordMatch('password', 'passwordConfirm')
        ], {
          
        }
      ]
    });
  }

  get f() { return this.registerForm.controls; }

  register(formValue) {
    this.submitted = true;
    let registerErrors = new Array;
    if (this.registerForm.invalid) {
      UIkit.notification({message: 'Please try again..', status: 'danger'})
    } else {
      this.auth.register(formValue).subscribe(res => {
        UIkit.notification({message: 'Good Job.. Now you are registerd!', status: 'success'})
        console.log(res);
      }, err => {
        console.log(err);
       
      })
    }
  }

  public passwordMatch(password: string, confirmPassword: string): boolean {
    return this.registerForm.get('password') !== this.registerForm.get('confirmPassword');
  }
}
