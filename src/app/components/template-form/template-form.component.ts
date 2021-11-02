import { Component, OnInit } from '@angular/core';

export class Template {

  constructor(
    public fullName: string,
    public email: string,
    public phoneNo: string,
    public password: string,
    public confirmPassword: string
  ) { }

}

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {

  model = new Template('', '', '', '', '');

  submitted = false;

  mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$";  

  onSubmit() {
    // this.submitted = true;
  }

}
