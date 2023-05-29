import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginInfo } from '../../models/Materias';
import { Router } from '@angular/router';
import { CuentaService } from 'src/app/service/CuentaService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(private accountService: CuentaService, private formBuilder: FormBuilder, private router: Router) {
    
  }

  ngOnInit(): void {
    this.loginForm = this.initForm();
  }

  initForm(): FormGroup {
    return this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  login(): void {
    const loginInfo: LoginInfo = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    }
    this.accountService.login(loginInfo.email, loginInfo.password).subscribe({
      next: (res: any) => {
        console.log(res); 
        localStorage.setItem('token', res.token);
        this.accountService.setactualID(res.userId);

        this.router.navigate(['start']);
      },
      error: (err) => {
        console.log(err)
      }
    });
  }

}
