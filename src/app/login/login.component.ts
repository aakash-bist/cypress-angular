import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  loading: boolean = false;
  submitted: boolean = false;
  constructor(private formBuilder: FormBuilder, private router: Router ) {

  }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
    });
}
get f() { return this.loginForm.controls; }

onSubmit():any {
  this.submitted = true;
  // if(this.loginForm.valid) 
  // this.router.navigate(['dashboard'])
}
}
