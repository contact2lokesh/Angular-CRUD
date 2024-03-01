import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { RegisterService } from 'src/app/sevices/register.service';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private resisterService: RegisterService,
  ) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required], this.resisterService.userNameValidator.bind(this.resisterService)],
      password: ['', Validators.compose([Validators.required, this.resisterService.patternValidator()])],
      confirmPassword: ['', [Validators.required]],
    },
      {
        validator: this.resisterService.MatchPassword('password', 'confirmPassword'),
      }
    );
  }

  get registerFormControl() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.valid) {
      this.resisterService.SignUp(this.registerForm.value);
      this.registerForm.reset();
    }
  }
}