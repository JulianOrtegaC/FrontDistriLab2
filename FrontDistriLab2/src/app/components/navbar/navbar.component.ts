import { Component, OnInit } from '@angular/core';
import { CuentaService } from 'src/app/service/CuentaService';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public isLogin:boolean=false;
  constructor(private cuentaService: CuentaService) { 
    this.isLogin = cuentaService.getIsLogin();
  }

  ngOnInit(): void {

  }
  logout(){
    this.cuentaService.setIsLogin(false);
  }
}
