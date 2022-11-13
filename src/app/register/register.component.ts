import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { __values } from 'tslib';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  lName = new FormControl('', [
    Validators.required,
    Validators.maxLength(20),
    Validators.pattern('[a-zA-Z]*'),
  ]);
  fName = new FormControl('', [
    Validators.required,
    Validators.maxLength(20),
    Validators.pattern('[a-zA-Z]*'),
  ]);
  checkEmail = new FormControl('', [Validators.required, Validators.email]);
  checkPassword = new FormControl('', [
    Validators.required,
    Validators.minLength(10),
    Validators.maxLength(30),
  ]);
  checkConfirmPassword = new FormControl('', [
    Validators.required,
    Validators.minLength(10),
    Validators.maxLength(30),
  ]);

  policy = new FormControl('', [Validators.required]);

  submitForm = this.formBuilder.group({
    firstName: '',
  });
  hide = true;

  async ngOnInit(): Promise<void> {}
  getErrorMessageEmail() {
    if (this.checkEmail.hasError('required')) {
      return 'You must enter a value';
    }

    return this.checkEmail.hasError('email') ? 'Not a valid email' : '';
  }

  getErrorMessagePolicy() {
    if (this.policy.hasError('required')) {
      return 'You need to agree with our Policy'
    }
    return '';
  }
  getErrorMessageFirstName() {
    if (this.fName.hasError('required')) {
      return 'You must enter a value';
    }

    if (this.fName.hasError('maxlength')) {
      return 'Too long';
    }
    if (this.fName.hasError('pattern')) {
      return 'Contain unacceptable letter';
    }
    return '';
  }

  getErrorMessageLastName() {
    if (this.lName.hasError('required')) {
      return 'You must enter a value';
    }

    if (this.lName.hasError('maxlength')) {
      return 'Too long';
    }

    if (this.lName.hasError('pattern')) {
      return 'Contain unacceptable letter';
    }
    return '';
  }

  getErrorMessagePassword() {
    if (this.checkPassword.hasError('required')) {
      return 'You must enter a value';
    }

    if (this.checkPassword.hasError('maxlength')) {
      return 'Too long';
    }

    if (this.checkPassword.hasError('minlength')) {
      return 'Too short';
    }

    return '';
  }

  getErrorMessageConfirmPassword() {
    if (this.checkConfirmPassword.hasError('required')) {
      return 'You must enter a value';
    }

    if (this.checkConfirmPassword.hasError('maxlength')) {
      return 'Too long';
    }

    if (this.checkConfirmPassword.hasError('minlength')) {
      return 'Too short';
    }

    // if (submitFormValue.password != submitFormValue.confirmPassword) {
    //   return 'Confirm password is different from Password';
    // }

    return '';
  }

  showFirstName() {
    const submitFormValue = this.submitForm.value;

    console.log(submitFormValue.firstName)
  }
}
