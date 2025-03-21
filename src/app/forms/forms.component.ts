import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-forms',
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {
form=new FormGroup({
  name: new FormControl(''),
  email: new FormControl('',[
    Validators.required,
    Validators.email,
  ]),
  password: new FormControl(''),
  mobileNumber: new FormControl(''),
  address: new FormControl('') 
})


alertVisible = false;
  alertMessage = '';

  submitForm() {
    const formValues = Object.values(this.form.value);
    this.alertMessage = formValues.map(value => `- ${value}`).join('\n');
    this.alertVisible = true;

    console.log(this.alertMessage);
  }

  closeAlert() {
    this.alertVisible = false;
  }

// submitForm() {
//   const formValues = Object.values(this.form.value);
//   const jsonString = formValues.map(value => `- ${value}`).join('\n'); 
//   alert(jsonString);
//   console.log(jsonString);
// }

// submitForm(){
//   alert(JSON.stringify(this.form.value))
//   console.log(JSON.stringify(this.form.value))
// }

// submitForm() {
//   const formValues = Object.values(this.form.value); 
//   alert(formValues);
//   console.log(formValues);
// }

// submitForm() {
//   const formValues = Object.values(this.form.value);
//   alert(formValues.join(', ')); 
//   console.log(formValues.join(', '));
// }
}
