import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators  } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
   loginForm: FormGroup;
   errorMessage: string;
   validationMessages = {
     email: 'Email required',
     password: 'Password required'
   };
   IsSaveButtonDisabled=false;
  constructor(private _router: Router, private _formBuilder: FormBuilder) { }
  /**
   * Function executes when login component is created
   */
  ngOnInit() {
      this.loginForm = this._formBuilder.group({
        username: new FormControl('', [Validators.email, Validators.required]),
        password: new FormControl('', [Validators.required])
      });

      
  }
  /**
   * Function to check the validity of fields in login form
   * @param  {string} field - Field name
   */
  isFieldValid (field: string) {
      return !this.loginForm.get(field).valid && this.loginForm.get(field).touched;
  }
  /**
   * Function to handle when login form is submitted
   */
  onLogin () {
    let formData=this.loginForm.getRawValue();
    console.log('formData',formData.username);
    this.IsSaveButtonDisabled=true;
    if (formData.username==='retailer@ggktech.com' && formData.password==='Password@123') {
      this._router.navigate(['/inner/retailer-view']);
    }
    else if (formData.username==='user@ggktech.com' && formData.password==='Password@123') {
      this._router.navigate(['/inner/user']);
    } else {
      alert('Invalid User Credentials');
      this.IsSaveButtonDisabled=false;
    }
  }
  /**
   * Function to set the user token
   * @param  {Object} data - response object
   */
  setToken (data) {
    
    if (data) {
      const authorizationHeader = `${data.token_type} ${data.accessToken}`;

      if (data.accessToken && data.token_type) {
      }
    } else {
      this.IsSaveButtonDisabled=false;
      
    }
  }
  removeMessages($event) {
    this.errorMessage = null;
  }

}
