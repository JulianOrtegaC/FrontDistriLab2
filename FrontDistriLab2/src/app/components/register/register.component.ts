import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Registro } from 'src/app/models/Materias';
import { CuentaService } from 'src/app/service/CuentaService';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  email!: string;
  nameuser!: string;
  password!: string;
  repeat_password!: string;
  errors: boolean = false;

  constructor(private cuentaService: CuentaService, private router: Router) {}
  register() {
    if (this.password != this.repeat_password) {
      this.errors = true;
    }

    this.cuentaService
      .register(this.nameuser, this.email, this.password)
      .subscribe({
        next: (res: any) => {
          this.router.navigate(['login']);
        },
        error: (err) => {},
      });
  }
}
